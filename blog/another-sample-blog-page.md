---
title: "Web Accessibility: What I Learned About Building for Everyone"
author: "Caden Eberle"
description: "My research into web accessibility, ARIA attributes, and how inclusive design improves websites for all users."
published: "2026-02-26"
---

# Web Accessibility: What I Learned About Building for Everyone

Before researching web accessibility, I honestly thought it just meant adding alt text to images. After digging deeper, I realized it's much more than that. Accessibility is about designing websites so everyone — including people with disabilities — can use them effectively.

This research completely changed how I think about web development.

---

## What Is Web Accessibility?

Web accessibility means building websites that people with visual, auditory, motor, or cognitive disabilities can perceive, understand, navigate, and interact with.

It matters because:

* Millions of users rely on assistive technologies like screen readers
* Many organizations are legally required to meet accessibility standards
* Accessible design improves usability for everyone
* It reflects ethical and professional development practices

Accessibility is not an "extra feature." It's part of doing the job correctly.

---

## Who Benefits?

At first, I assumed accessibility mainly helped people who are blind. That's not true — it benefits people with visual, auditory, motor, or cognitive disabilities, older adults, mobile users, and really anyone navigating in a difficult environment. Good accessibility improves the experience for all users.

---

## Accessibility Best Practices I Learned

### 1. Use Semantic HTML

Use proper elements like `<button>`, `<nav>`, `<header>`, and `<main>` instead of generic `<div>` tags. They carry built-in meaning and make sites automatically more accessible.

### 2. Always Use Labels in Forms

```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>
```

Placeholders alone aren't enough — labels are essential for screen reader users.

### 3. Use Descriptive Link Text

"Download the Web Accessibility Guide (PDF)" is far more useful than "Click here." Descriptive links help users understand where they're going.

### 4. Provide Alt Text for Images

Describe meaningful images with alt text. For purely decorative images, use `alt=""` so screen readers skip them entirely.

### 5. Make Sure Sites Work with a Keyboard

Users should be able to navigate with Tab, Enter, and arrow keys alone. When I tried this myself, I realized how many sites are difficult or impossible to use without a mouse.

---

## Understanding ARIA

ARIA stands for **Accessible Rich Internet Applications**. It provides additional information to assistive technologies when standard HTML isn't enough — but it should support semantic HTML, not replace it.

### Key ARIA Attributes

**`aria-label`** — Gives an element a text label when no visible text exists, like an icon-only button.

**`aria-labelledby`** — Associates an element with another element that labels it, such as linking a `<nav>` to its heading.

**`aria-describedby`** — Provides additional context, like linking a password field to a hint about requirements.

**`aria-hidden`** — Hides decorative content like icon characters from screen readers to reduce clutter.

**`aria-live`** — Announces dynamic updates automatically, which is essential for form validation messages and notifications.

---

## Legal and Ethical Considerations

Accessibility is tied to standards like the Americans with Disabilities Act (ADA) and Web Content Accessibility Guidelines (WCAG). Organizations that ignore accessibility can face legal consequences and reputational damage.

Beyond the legal side, it's simply ethical. The internet should not exclude people.

---

## What Surprised Me Most

When I tried navigating websites using only a keyboard, I struggled. Dropdown menus didn't open, buttons weren't focusable, and links were unclear. If I found it frustrating after a few minutes, I can only imagine the daily barriers for someone who depends on assistive technology.

Accessibility is not just about compliance — it's about empathy.

---

## Resources That Helped Me

* [W3C Accessibility Intro](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* [MDN ARIA Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [WebAIM Intro](https://webaim.org/intro/)

---

## Final Thoughts

Before this research, I saw accessibility as a small checklist item. Now I understand it as a core responsibility of web developers. Building accessible websites improves code quality, usability, SEO, and creates inclusive experiences.

Accessibility isn't extra work. It's part of building the web correctly.

---

## What Is Web Accessibility?

Web accessibility means building websites that people with visual, auditory, motor, or cognitive disabilities can perceive, understand, navigate, and interact with. It matters because millions rely on assistive technologies, many organizations are legally required to meet accessibility standards, and it simply reflects ethical development practices.

Accessibility is not an "extra feature." It's part of doing the job correctly.

---

## Accessibility Best Practices I Learned

**Use Semantic HTML** — Elements like `<button>`, `<nav>`, and `<main>` carry built-in meaning that makes sites automatically more accessible than generic `<div>` tags.

**Label Your Forms** — Always pair inputs with a `<label>` element. Placeholders alone aren't enough for screen readers.

**Descriptive Link Text** — "Download the Web Accessibility Guide (PDF)" is far more useful than "Click here."

**Alt Text for Images** — Describe meaningful images; use an empty `alt=""` for decorative ones so screen readers skip them.

**Keyboard Navigation** — Your site should be fully usable with just Tab, Enter, and arrow keys. Try it yourself — you'll be surprised how many sites fail this.

---

## Understanding ARIA

ARIA (Accessible Rich Internet Applications) provides extra information to assistive technologies when standard HTML isn't enough. Key attributes include:

- **`aria-label`** — adds a text label when no visible text exists (e.g., icon-only buttons)
- **`aria-labelledby`** — links an element to another element that describes it
- **`aria-describedby`** — provides additional context, like password requirements
- **`aria-hidden`** — hides decorative content from screen readers
- **`aria-live`** — announces dynamic updates like form success messages automatically

The rule: ARIA should *support* semantic HTML, not replace it.

---

## Legal and Ethical Considerations

Accessibility is tied to standards like the ADA and WCAG. Ignoring it can mean legal consequences and reputational damage — but beyond compliance, it's simply ethical. The internet should not exclude people.

---

## Final Thoughts

When I tried navigating sites with only a keyboard, I struggled. If I found it frustrating after a few minutes, I can only imagine the daily barriers for someone who depends on assistive technology.

Accessibility isn't extra work. It's part of building the web correctly.

---

## Resources
- [W3C Accessibility Intro](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [MDN ARIA Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WebAIM Intro](https://webaim.org/intro/)