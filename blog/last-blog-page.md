---
title: "Automating Deployments with GitHub Actions: A CI/CD Journey"
author: "Caden Eberle"
description: "How I learned to automate deployments and why I'll never manually deploy again"
published: "2026-02-26"
---

# Automating Deployments with GitHub Actions: A CI/CD Journey

I used to manually SSH into my server, pull code, restart services, and pray nothing broke. Then I discovered GitHub Actions. Here's how it transformed my workflow.

## The Manual Deployment Problem

My old deployment process looked like this:
```bash
# SSH into server
ssh ec2-user@my-server.com

# Navigate to project
cd /home/ec2-user/my-app

# Pull latest code
git pull origin main

# Restart services
docker compose down
docker compose up -d

# Cross fingers and hope it worked
```bash

**Problems with this approach:**
- Takes 5-10 minutes every time
- Easy to forget steps
- No rollback if something breaks
- Can't deploy from my phone
- Boring and repetitive

## Enter GitHub Actions

GitHub Actions lets you automate workflows. Every time I push code to GitHub, it automatically:
1. Tests the code
2. SSHs into my server
3. Pulls the latest changes
4. Restarts the application
5. Notifies me of success or failure

All in under 2 minutes, with zero manual effort.

## My First Workflow

Here's the workflow file that changed everything (`.github/workflows/deploy.yml`):
```bash
name: Deploy to EC2

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Deploy to EC2
      env:
        PRIVATE_KEY: ${{ secrets.EC2_SSH_KEY }}
        HOST: ${{ secrets.EC2_HOST }}
        USER: ec2-user
      run: |
        echo "$PRIVATE_KEY" > private_key.pem
        chmod 600 private_key.pem
        ssh -o StrictHostKeyChecking=no -i private_key.pem ${USER}@${HOST} '
          cd /home/ec2-user/devops-final &&
          git pull origin main &&
          docker compose down &&
          docker compose up -d
        '
```bash

Let me break down what this does:

### The Trigger
```bash
on:
  push:
    branches: [ main ]
```bash
Runs automatically whenever I push to the main branch. No button to click, no command to run.

### The Runner
```bash
runs-on: ubuntu-latest
```bash
GitHub spins up a fresh Ubuntu server to run my workflow. It's free for public repositories!

### The Magic
The workflow:
1. **Checks out code**: Downloads my repository
2. **Sets up SSH**: Creates a private key from my secrets
3. **Connects to EC2**: SSHs into my production server
4. **Deploys**: Pulls code and restarts containers

## The Debugging Nightmare

Getting this working wasn't easy. I spent **hours** debugging:

### Problem 1: SSH Key Format
```bash
# This didn't work (base64 encoded)
echo "$PRIVATE_KEY" | base64 -d > private_key.pem

# This worked (raw key)
echo "$PRIVATE_KEY" > private_key.pem
```bash

**Lesson**: Store the raw PEM file in secrets, not base64 encoded.

### Problem 2: Merge Conflicts
The workflow would pull code, but then I'd have merge conflicts locally. Solution:
```bash
# Always pull before pushing
git pull --rebase origin main
git push origin main
```

### Problem 3: Wrong Repository Path
```bash
# Wrong (copied from template)
cd /path/to/your/repo

# Correct (my actual path)
cd /home/ec2-user/devops-final
```bash

**Lesson**: Always verify paths with `pwd` on your server!

## The Moment It Worked

After hours of failed deployments, I saw this:
```bash
✅ Deploy to EC2 completed successfully
```bash

I refreshed my website, and the changes were live. I literally stood up and cheered. This is the power of automation!

## Beyond Basic Deployment

Now that I have CI/CD working, I want to add:

### Automated Testing
```bash
- name: Run tests
  run: npm test
```bash

### Slack Notifications
```bash
- name: Notify team
  if: failure()
  run: |
    curl -X POST ${{ secrets.SLACK_WEBHOOK }} \
      -d '{"text":"Deployment failed!"}'
```bash

### Staging Environment
Deploy to staging first, then production:
```bash
jobs:
  deploy-staging:
    # Deploy to staging server
  
  deploy-production:
    needs: deploy-staging
    # Only runs if staging succeeds
```bash

## CI/CD Best Practices I Learned

1. **Use secrets for sensitive data**: Never hardcode passwords or keys
2. **Test locally first**: Don't debug in production
3. **Start simple**: Get basic deployment working before adding complexity
4. **Read the logs**: GitHub Actions logs are incredibly detailed
5. **Version control everything**: Including workflow files

## The Real Benefits

After using GitHub Actions for a few weeks:

- **Time saved**: 10 minutes per deployment × 20 deployments = 200 minutes saved
- **Fewer errors**: No more forgotten steps
- **Confidence**: I deploy more often because it's easy
- **Documentation**: The workflow file IS the deployment process
- **Learning**: Understanding CI/CD is essential for modern development

## Resources

Getting started with GitHub Actions:
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Awesome Actions](https://github.com/sdras/awesome-actions) - Community workflows
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions) - Pre-built actions

## Final Thoughts

CI/CD isn't just for big companies with DevOps teams. With GitHub Actions, anyone can automate their deployments for free. The initial setup took me hours, but I'll save that time back in weeks.

If you're still manually deploying, stop. Set up GitHub Actions. Your future self will thank you.

**Never. Deploy. Manually. Again.**