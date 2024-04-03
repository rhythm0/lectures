# Week 2

The plan for this week:

1. The essentials of CSS: code-along in demo.html
2. The `display: flex` property: code-along in movies.html
3. Class challenge: `movies_target.png`
4. Mobile-friendly design with _media queries_
5. Forms and server-side processing


**Notes**

1. Using the browser's "Inspector"
  * Try to learn the keyboard shortcut for invoking the browser's inspector (option-cmd-i in Chrome/macOS and Safari/macOS, for example)
  * The inspector is a VERY valuable tool. It's the only debugging tool web designers have.
  * Use the Inspector on your favorite sites. Try to really understand how to decode CSS rules from the inspector.

2. CSS Basics
  * CSS rules can be embedded within an HTML `<style>` head element, or placed in a separate file and loaded with a `<link rel="stylesheet" ...>` head element.
  * Every HTML element occupies a rectangular portion of the page.
  * CSS rules can affect the size, placement, color, etc. of an element's rectangle and inner content
  * "Selectors" can be HTML element names, `#` for selecting by the `id` attribute, and `.` for selecting by the `class` attribute.
  * CSS rules can be written to various levels of specificity, allowing (for example) broad, general rules to apply to most elements, while more specific rules can be written for certain parts of the page.
  * When conflicting rules have equal specificity, the last-processed rule "wins".  This usually means that rules placed lower in the source code have higher priority than rules higher in the source code.
  * The `<div>` element groups elements together as a single block.
  * The `<span>` element groups content together inline.
  * "Overflow" happens when an element's content is allowed to spill
    outside of its containing element's rectangle.  This happens a lot
    with both text and graphics.  Try `width`, `flex-basis`, or `object-fit` rules before resorting to `overflow` settings.

3. Layout with Flexbox
  * Normal Flow vs. "Flexible Box" (or "flexbox") Layout
  * Flex Cheat Sheet:
    * STEP 1: On parent element:
      * `display: flex` (this is the only hard requirement)
      * `justify-content: flex-start (default) | flex-end | center | space-between | space-around` (optional)
      * `align-items:  stretch (default) | flex-start | flex-end | center | baseline` (optional)
      * `flex-direction:  row (default) | column` (optional)
    * STEP 2 (OPTIONAL): On child elements:
      * `flex: [number]` to control fractional part of the page (optional)
      * Or use `flex-basis: [width]` instead of `width` for fixed amount (optional)

4. Media queries
  * Mobile "responsive" rules using `min-width`, `max-width`, etc.
  * Screen vs Printa
  * DON'T FORGET in your HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  
5. Using forms for user input
  * `<input>` and `<label>`
  * `<select>`
  * `<button>` vs `<input type="submit">`


### Recommended Reading
* [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)
* [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [CSS Diner](https://flukeout.github.io/)
* [CSS Zen Garden](http://www.csszengarden.com/)
* [Can I Use...](http://www.caniuse.com/)
* [Media Query Expressions](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [CSS Units](https://www.w3.org/Style/Examples/007/units.en.html)
