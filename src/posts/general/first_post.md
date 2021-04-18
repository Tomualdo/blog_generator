---
title: Revelation
description: Discovery of SSG
date: 2021-04-18
tags: ssg discovery generator static
---
# Relevation of SSG (Static site Generator)

Thanks To [fmash16](https://fmash16.github.io/content/posts/ssg5_site.html) I've found this awesome static site generator.  
This POSIX compliable shell script has been written by [Roman Zolotarev](https://www.romanzolotarev.com/). The documentation for this project can be found [here](https://www.romanzolotarev.com/ssg.html)

## HEADER FOR EVERY POST
```bash
---
title: FirstPost
description: Some description
date: 2021-04-18
tags: tags here
image: 
---
```

![](picture.jpg){#picture}

### source code blocks

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
term
: definition

~~The world is flat.~~

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

| Syntax | Description |
| ---------------- | ---------------- |
| Header | Title |
| Paragraph | Text |


> Blockquote paragraphs must have
> a right-arrow bracket at the start
> of every single line.
>
> Use a blank line for multiple paragraphs.


Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

