# SEO Optimization Guide for Idle Adventure Guide Pages

**Last Updated:** February 3, 2026
**Template Version:** 2.0
**Based on:** alteration.html optimization (achieved ~95% SEO score)

---

## 🎯 Purpose
This guide provides a step-by-step checklist for optimizing any guide page on the Idle Adventure site. Follow this template when asked to "optimize SEO" or "improve SEO" for any page.

---

## ✅ SEO Optimization Checklist

### **PRIORITY 1: Critical (High Impact)** ⭐⭐⭐

#### 1. Meta Tags Optimization
- [ ] **Title Tag** - Include primary keyword + "Idle Adventure" + year
  - Format: `[Primary Topic] Guide – Idle Adventure | [Secondary Keywords]`
  - Example: `Item Alteration Guide – Idle Adventure | Reroll & Modify Equipment`
  - Max length: 60 characters

- [ ] **Meta Description** - Compelling, keyword-rich, includes year
  - Include: Main topic, key features, current year (2026)
  - Example: `Master Idle Adventure's 11 Alteration Orbs in 2026: Complete guide to item crafting, gear modification, rerolling stats, break chances, and optimization strategies.`
  - Length: 150-160 characters

- [ ] **Keywords Meta Tag** - 5-10 relevant keywords
  - Include: Primary keyword, variations, related terms
  - Example: `Idle Adventure alteration, item reroll, stat modification, equipment alteration, reroll guide, item customization, gear modification, item crafting`

- [ ] **Open Graph Tags**
  ```html
  <meta property="og:type" content="article">
  <meta property="og:title" content="[Same as title tag]">
  <meta property="og:description" content="[Same as meta description]">
  <meta property="og:site_name" content="Idle Adventure Guide">
  <meta property="og:url" content="https://pacmenco.github.io/[pagename].html">
  ```

- [ ] **Twitter Card Tags**
  ```html
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="[Same as title tag]">
  <meta name="twitter:description" content="[Shortened meta description]">
  ```

#### 2. JSON-LD Structured Data (CRITICAL!)
Add three schema types in the `<head>`:

- [ ] **Article Schema**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "[Page Title]",
    "description": "[Meta description]",
    "author": {
      "@type": "Person",
      "name": "PacmenCo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PacmenCo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pacmenco.github.io/images/logo.png"
      }
    },
    "datePublished": "2026-02-03",
    "dateModified": "2026-02-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://pacmenco.github.io/[pagename].html"
    },
    "keywords": "[comma separated keywords]",
    "articleSection": "Game Guide",
    "about": {
      "@type": "VideoGame",
      "name": "Idle Adventure"
    }
  }
  ```

- [ ] **HowTo Schema** (if page is instructional)
  ```json
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to [Main Topic] in Idle Adventure",
    "description": "[Brief description of what user will learn]",
    "step": [
      {
        "@type": "HowToStep",
        "name": "[Step name]",
        "text": "[Step description]"
      }
      // Add 3-5 steps
    ]
  }
  ```

- [ ] **FAQPage Schema** (add FAQ section if not present)
  ```json
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "[Question text]",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[Answer text]"
        }
      }
      // Add 4-6 questions
    ]
  }
  ```

#### 3. Image Optimization
For ALL images on the page:

- [ ] **Add width and height attributes** (prevents CLS)
  - Example: `width="32" height="32"` for icons
  - Use actual dimensions of the image

- [ ] **Add loading="lazy"** (improves page speed)
  - Example: `<img src="..." loading="lazy">`
  - Exception: First image above the fold can skip this

- [ ] **Enhance alt text** (descriptive, keyword-rich)
  - Bad: `alt="Orb of Alteration"`
  - Good: `alt="Orb of Alteration - rerolls one random affix on equipment in Idle Adventure"`
  - Include: What it is + what it does + "in Idle Adventure"

#### 4. Semantic HTML Structure
- [ ] Wrap entire page content in `<article>` tag
- [ ] Use `<header>` for hero/title section
- [ ] Convert content divs to `<section>` tags
- [ ] Ensure proper heading hierarchy (H1 → H2 → H3)
- [ ] Only ONE H1 per page (the main title)

---

### **PRIORITY 2: Important (Medium-High Impact)** ⭐⭐

#### 5. Table of Contents
- [ ] Create TOC with jump links to all major sections
- [ ] Add IDs to all H2 sections (`id="section-name"`)
- [ ] Style TOC to be visually appealing (epic colors, obviously clickable)
- [ ] Use the epic TOC styling from alteration.html

**TOC Template:**
```html
<nav class="table-of-contents">
  <h2>📋 Table of Contents</h2>
  <ul class="toc-list">
    <li><a href="#section1">Section 1 Name</a></li>
    <li><a href="#section2">Section 2 Name</a></li>
    <!-- Add all major sections -->
  </ul>
</nav>
```

#### 6. FAQ Section (Critical for Featured Snippets!)
- [ ] Add dedicated FAQ section near end of page
- [ ] Create 4-6 strategic questions based on:
  - Common search queries
  - Long-tail keywords
  - "How to...", "What is...", "Can I..."
- [ ] Provide comprehensive answers (2-4 sentences each)
- [ ] Use H3 for each question
- [ ] Add FAQ schema (see Priority 1)

**FAQ Template:**
```html
<section class="content-section" id="faq">
  <h2>❓ Frequently Asked Questions</h2>

  <h3>What is [Topic] in Idle Adventure?</h3>
  <p><strong>[Key term]</strong> is [definition]. [Additional context].</p>

  <h3>How do I [Common Task]?</h3>
  <p>[Step-by-step answer with <strong>emphasis</strong> on key terms].</p>

  <!-- Add 4-6 total questions -->
</section>
```

#### 7. Keyword Optimization
- [ ] **First Paragraph** - Include primary keyword in first 100 words
- [ ] **Add <strong> tags** to important keywords (8-12 instances throughout)
- [ ] **LSI Keywords** - Include related terms naturally:
  - For combat: "battle mechanics", "fighting strategy", "enemy encounters"
  - For crafting: "gear modification", "item crafting", "equipment upgrade"
  - For skills: "ability tree", "skill build", "talent progression"
- [ ] **Long-tail keywords** in headings and Pro Tips section

#### 8. Reading Time & Freshness
- [ ] Add reading time estimate in header
- [ ] Add "Last updated: [Date]" in header
- [ ] Format: `📖 Reading time: X minutes | Last updated: February 3, 2026`

---

### **PRIORITY 3: Nice-to-Have (Lower Impact)** ⭐

#### 9. Conclusion Section
- [ ] Add conclusion section before closing article
- [ ] Summarize main points
- [ ] Reinforce primary keywords
- [ ] Provide "next steps" or call-to-action

**Template:**
```html
<section class="content-section" id="conclusion">
  <h2>🎯 Conclusion: Mastering [Topic]</h2>
  <p><strong>[Topic]</strong> is [summary]. By understanding [key points], you can [benefit].</p>
  <p>Remember these key principles:</p>
  <ul class="feature-list">
    <li>[Key point 1]</li>
    <li>[Key point 2]</li>
    <li>[Key point 3]</li>
  </ul>
  <p>With this <strong>[topic] guide</strong>, you're ready to [action]!</p>
</section>
```

#### 10. Pro Tips Section
- [ ] Add "Pro Tips" subsection to strategy/tips area
- [ ] Include 4-6 actionable tips
- [ ] Use long-tail keywords in tip headings
- [ ] Format: `<strong>How to [specific action]:</strong> [tip content]`

#### 11. Content Enrichment
- [ ] Expand thin paragraphs with more context
- [ ] Add transition words between sections
- [ ] Include comparisons (use comparison tables)
- [ ] Add warning/info boxes for important notes

---

## 🎨 Visual/UX Enhancements (Good for Engagement Metrics)

#### 12. Table of Contents Styling
Use the epic TOC styling:
```css
.table-of-contents {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(245, 158, 11, 0.05));
  border: 2px solid rgba(124, 58, 237, 0.4);
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.2);
}

.toc-list li a {
  color: var(--accent-cyan);
  background: rgba(10, 14, 26, 0.6);
  border: 1px solid rgba(124, 58, 237, 0.3);
}

.toc-list li a:before {
  content: "→";
  color: var(--accent-orange);
}

.toc-list li a:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 10px rgba(245, 158, 11, 0.3);
}
```

---

## 📊 Pages Requiring SEO Optimization

**High Priority Pages (Core Guides):**
1. ✅ alteration.html - COMPLETED (template page)
2. ⬜ enchanting.html - Similar to alteration
3. ⬜ skills.html - High traffic potential
4. ⬜ talents.html - High traffic potential
5. ⬜ combat.html - Core mechanic
6. ⬜ companions.html - Popular feature
7. ⬜ ascensions.html - Endgame content

**Medium Priority Pages (Feature Guides):**
8. ⬜ fishing.html
9. ⬜ consumables.html
10. ⬜ guild.html
11. ⬜ special-areas.html
12. ⬜ upgrading.html

**Low Priority Pages (Specific Content):**
13. ⬜ cosy-cave.html
14. ⬜ crypt.html
15. ⬜ ruined-tower.html
16. ⬜ mouse-hole.html
17. ⬜ debuff.html
18. ⬜ minigames.html

**Skip/Special Cases:**
- index.html - Homepage (needs different optimization)
- faq.html - Already FAQ-focused
- *-viewer.html - Interactive tools (different approach)
- test-*.html - Testing pages (exclude from SEO)

---

## 🚀 Quick Start: Optimizing a New Page

When asked to "optimize SEO for [page].html":

1. **Read the page** to understand the topic
2. **Check Priority 1 items first** (meta tags, schema, images)
3. **Add FAQ section** with 4-6 relevant questions
4. **Add semantic HTML** (article, section, header tags)
5. **Create Table of Contents** with epic styling
6. **Optimize images** (dimensions, lazy loading, alt text)
7. **Add conclusion section** with keyword summary
8. **Add <strong> tags** to 8-12 key terms
9. **Verify all sections have IDs** for TOC links
10. **Add reading time and last updated date**

**Estimated time per page:** 15-20 minutes

---

## ✨ Expected SEO Results

After full optimization, pages should achieve:
- ✅ **Featured Snippets** eligibility (FAQ, HowTo schemas)
- ✅ **Rich Results** in search (Article schema)
- ✅ **90-95% SEO score** (technical optimization)
- ✅ **Better rankings** for long-tail keywords
- ✅ **Lower bounce rate** (TOC, better UX)
- ✅ **Higher click-through rate** (compelling meta descriptions)

---

## 📝 Notes

- **Don't Add Quick Reference Sections** - Removed from template (low SEO value, potential UX issues)
- **Always use current year** in meta descriptions (2026 as of this writing)
- **Font loading** already optimized with display=swap
- **Canonical URLs** should match the page URL
- **JSON-LD schemas** are the #1 SEO priority - don't skip these!
- **FAQ sections** have highest ROI for featured snippets

---

## 🔄 Template Updates

**Version 2.0** (Feb 3, 2026)
- Removed Quick Reference sections
- Added epic TOC styling
- Enhanced FAQ importance
- Added pro tips requirement
- Updated keyword strategies

**Version 1.0** (Initial)
- Based on alteration.html optimization
- Core checklist created

---

## 💡 Pro Tips for SEO Optimization

1. **Schema markup is king** - Prioritize JSON-LD above all else
2. **FAQs = Featured snippets** - Always add comprehensive FAQ sections
3. **Images matter** - Width/height attributes prevent CLS (Core Web Vital)
4. **Semantic HTML** helps crawlers understand page structure
5. **Long-tail keywords** in FAQ questions target specific searches
6. **Reading time signals quality** content to users and search engines
7. **<strong> tags** for important keywords (but don't overdo it)
8. **Conclusion sections** reinforce keywords and improve engagement
9. **TOC improves UX** which indirectly helps SEO through engagement metrics
10. **Consistency matters** - Use same optimization across all pages

---

*This guide is a living document. Update it as SEO best practices evolve.*
