---
title: CSS Cheatsheet
description: CSS is what makes a website unique
date: 2021-04-21
tags: cheatsheet css 
---
# CSS CHEAT SHEET

[Backgrounds](#backgrounds)  
[Border](#border)  
[Box Model](#box-model)  
[Font](#font)  
[Text](#text)  
[Column](#column)  
[Colors](#colors)  
[Table](#table)  
[Speech](#speech)  
[List & Markers](#list-markers)  
[Animations](#animations)  
[Transitions](#transitions)  
[UI](#ui)  
[Pseudo-Class](#pseudo-class)  

## Backrounds
### background  
 - background-image  
 - background-position  
 - background-size  
 - background-repeat  
 - background-attachment  
 - background-origin  
 - background-clip  
 - background-color  

### background-image
 - url  
 - gradients  
 - none  

### background-position
 - top left | top center | top right | center left | center center |
 - center right | bottom left | bottom center | bottom right  
 - x-% y-%  
 - x-pos y-pos  

### background-size
 - length  
 - %  
 - auto | cover | contain  

### background-repeat
 - repeat | repeat-x | repeat-y |  
 - no-repeat  

### background-attachment
 - scroll | fixed | local  

### background-origin
 - border-box | padding-box | content-box  

### background-clip
 - border-box | padding-box | content-box  

### background-color  
 - color
 - transparent

***

## Border [\^](#top)
### border

 - border-width  
 - border-style  
 - border-color  

### border-width  
 - thin | medium | thick | length  

### border-style  
 - none | hidden | dotted |  
 - dashed | solid | double |  
 - groove | ridge | inset | outset  

### border-color  
 - color  

### border-bottom  
 - border-bottom-width  
 - border-style  
 - border-color  

### border-left  
 - border-left-width  
 - border-style  
 - border-color  

### border-left-style  
 - border-style  

### border-right-color  
 - border-color  

### border-right-width  
 - thin | medium | thick | length  

### border-top-width  
 - thin | medium | thick | length  

### border-break  
 - border-width  
 - border-style  
 - color  
 - close  

### border-bottom-color  
 - border-color  

### border-bottom-style  
 - border-style  

### border-left-color  
 - border-color  

### border-left-width  
 - thin | medium | thick length  

### border-right-style  
 - border-style  

### border-top  
 - border-top-width  
 - border-style  
 - border-color  

### border-top-color  
 - border-color  

### border-top-style  
 - border-style  

### box-shadow  
 - inset || [ length, length, length, length || <color> ]  
 - none  

### border-collapse  
 - collapse | separate  

### border-image  
 - image  
 - [ number / % border-width stretch | repeat | round ]  
 - none  

### border-right  
 - border-right-width  
 - border-style  
 - border-color  

### border-radius  
 - border-radius  
 - border-top-right-radius  
 - border-bottom-right-radius  
 - border-bottom-left-radius  
 - border-top-left-radius  

### border-top-right-radius  
 - length  

### border-bottom-right-radius  
 - length  

### border-bottom-left-radius  
 - length  

***

## Box Model [\^](#top)
### float
 - left | right | none  

### height  
 - auto  
 - length  
 - %  

### max-height  
 - none  
 - length  
 - %  

### max-width  
 - none  
 - length%  

### min-height  
 - none  
 - length  
 - %  

### width  
 - auto  
 - %  
 - length  

### margin  
 - margin-top  
 - margin-right  
 - margin-bottom  
 - margin-left  
### margin-bottom  
 - auto  
 - length  
 - %  

### margin-left  
 - auto  
 - height  
 - %  

### margin-right  
 - auto  
 - height  
 - %  

### margin-top  
 - auto  
 - length  
 - %  

### padding  
 - padding-top  
 - padding-right  
 - padding-bottom  
 - padding-left  
 - padding-bottom  
 - length  
 - %  

### padding-left  
 - length  
 - %  

### padding-right  
 - length  
 - %  

### padding-top  
 - length  
 - %  

### display  
 - none | inline | block | inline-block | flex | inline-flex | grid |  
 - inline-grid | contents | list-item |run-in | compact | table |  
 - inline-table | table-row-group | table-header-group |  
 - table-footer-group | table-row | table-column-group | table-column |  
 - table-cell | table-caption | ruby | ruby-base | ruby-text |  
 - ruby-base-group | ruby-text-group  

### overflow  
 - visible | hidden | scroll |  
 - auto | no-display | no-content  
 - overflow-x  
 - overflow-y  

### overflow-style  
 - auto | marquee-line | marqueeblock  

### overflow-x  
 - visible | hidden | scroll |  
 - auto | no-display | no-content  

### visibility  
 - visible | hidden | collapse  

### clear  
 - left | right | both | none  

***

## Font   [\^](#top)
### font  
 - font-style  
 - font-variant  
 - font-weight  
 - font-size/line-height  
 - font-family  
 - caption | icon | menu | messagebox | small-caption | status-bar  

### font-size-adjust  
 - none | inherit  
 - number  


### font-family  
 - serif | sans-serif | Font Name  

### font-style  
 - normal | italic | oblique | inherit  

### font-variant  
 - normal | small-caps | inherit  

### font-size  
 - xx-small | x-small | small | medium | large | x-large | xxlarge |  
 - smaller | larger |  
 - inherit  
 - length  
 - %  

### font-weight  
 - normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 |  
 - 700 | 800 | 900 | inherit  

 - ***

## Text   [\^](#top)
### direction  
 - ltr | rtl | inherit  

### hanging-punctuation  
 - none | [ start | end | endedge ]  

### letter-spacing  
 - normal  
 - length  
 - %  
 -   
### text-outline  
 - none  
 - color  
 - length  

### unicode-bidi  
 - normal | embed | bidi-override  

### white-space  
 - normal | pre | nowrap | pre-wrap | pre-line  

### white-space-collapse  
 - perserve | collapse | pre-servebreaks | discard  

### punctuation-trim  
 - none | [ start | end | adjacent ]  

### text-align  
 - start | end | left | right | center | justify  

### text-align-last  
 - start | end | left | right | center | justify  

### text-decoration  
 - none | underline | overline | line-thorugh | blink  

### text-shadow  
 - none  
 - color  
 - length  

### word-break  
 - normal | keep-all | loose | break-strict | break-all  

### word-wrap  
 - normal  
 - nowrap  

### text-emphasis  
 - none | [ [ accent | dot | circle | disc | [ before | after ]?]  

### text-indent  
 - length  
 - %  

### text-justify  
 - auto | inter-word | interideograph | inter-cluster | distribute |  
 - kashida | tibetan  

### text-transform  
 - none | capitalize | uppercase | lowercase  

### text-wrap  
 - normal | unresrricted | none | suppress  

### word-spacing  
 - normal  
 - length  
 - %  

***

## Column   [\^](#top)
### column-count  
 - auto  
 - number  

### column-fill 
 - auto | balance  

### column-gap  
 - normal  
 - length  

### column-rule  
 - column-rule-width  

### column-rule-style  
 - column-rule-color  

### column-rule-style  
 - border-style  

### columns  
 - column-width  
 - column-count  

### column-rule-width  
 - thin | medium | thick  
 - length  

### column-span  
 - 1 | all  

### column-width  
 - auto  
 - length  

***

## Colors   [\^](#top)
### color  
 - inherit  
 - color  

### opacity  
 - inherit  
 - number  

***

## Table   [\^](#top)
### border-collapse  
 - collapse | separate  

### empty-cells  
 - show | hide  

### border-spacing  
 - length length  

### table-layout  

 - auto | fixed  

### caption-side  
 - top | bottom | left | right  

***

## Speech  [\^](#top)
### cue  
 - cue-before  
 - cue-after  

### cue-before  
 - url [ silent | x-soft | soft | medium | loud | x-loud | none | inherit ]  
 - number  
 - %  

### mark  
 - mark-before  
 - mark-after  

### mark-before  
 - string  

### mark-after  
 - string  

### voice-pitch-range  
 - x-low | low | medium | high | xhigh | inherit  
 - number  

### voice-stress  
 - strong | moderate | none | reduced | inherit  

### voice-volume  
 - silent | x-soft | soft | medium | loud | x-loud | inherit  
 - number  
 - %  

### cue-after  
 - url [ silent | x-soft | soft | medium | loud | x-loud | none | inherit  
 - ]  
 - number  
 - %  

### pause  
 - pause-before  
 - pause-after  

### pause-before  
 - none | x-weak | weak | medium | strong | x-strong | inherit  
 - time  

### phonemes  
 - string  

### voice-duration  
 - time  

### voice-family  
 - inherit | [ <specific-voice, age, generic-voice, number> ]  

### voice-rate  
 - x-slow | slow | medium | fast | x-fast | inherit  
 - %  

### voice-pitch  
 - x-low | low | medium | high | xhigh | inherit  
 - number  
 - %  

### caption-side  
 - top | bottom | left | right  

### rest  
 - rest-before  
 - rest-after  

### rest-before  
 - none | x-weak | weak | medium | strong | x-strong | inherit  
 - time  

### rest-after  
 - none | x-weak | weak | medium | strong | x-strong | inherit  
 - time  

### speak  
 - none | normal | spell-out | digits | literal-punctuation |  
 - no-punctuation | inherit-number  

***

## List & Markers   [\^](#top)
### list-style  
 - list-style-type  
 - list-style-position  
 - list-style-image  

### list-style-image  
 - none  
 - url  

### list-style-type  
 - none | asterisks | box | check | circle | diamond | disc | hyphen |  
 - square | decimal | decimalleading-zero | lower-roman | upper-roman |  
 - lower-alpha | upper-alpha | lower-greek | lower-latin | upper-latin |  
 - hebrew | armenian | georgian | cjk-ideographic | hiragana | katakana |  
 - hiragana-iroha | katakana-iroha | footnotes  

### marker-offset  
 - auto  
 - length  

***

## Animations   [\^](#top)
### animations  
 - animation-name  
 - animation-duration  
 - animation-timing-function  
 - animation-delay  
 - animation-iteration-count  
 - animation-direction  

### animation-name  
 - none | IDENT  

### animation-duration  
 - time  

### animation-timing-function  
 - ease | linear | ease-in | easeout | ease-in-out | cubic-Bezier  
 - (number, number, number, number)  

### animation-delay  
 - time  

### animation-iteration-count  
 - inherit  
 - number  

### animation-direction  
 - normal | alternate  

### animation-play-state  
 - running | paused  

### rotation  
 - angle  
 - rotation-point  
 - position (paired value off-set)  

***

## Transitions   [\^](#top)
### transitions  
 - transitions-property  
 - transitions-duration  
 - transitions-timing-function  
 - transitions-delay  

### transitions-delay  
 - time  

### transitions-duration  
 - time  

### transitions-property  
 - none | all  

### transition-timing-function  
 - ease | linear | ease-in | ease-out | ease-in-out | cubicBezier(  
 - number, number, number, number)  

***

## UI   [\^](#top)
### appearance  
 - normal | inherit | [icon | window | desktop | work-space | document |  
 - tooltip | dialog | button | push-button | hyperlink | radio-button |  
 - checkbox | menu-item | tab | menu | menubar | pull-down-menu |  
 - pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree  
 - | range | field | combo-box | signature | password]  

### cursor  
 - auto | crosshair | default | pointer | move | e-resize | neresize |  
 - nw-resize | n-resize | se-resize | sw-resize | swresize | s-resize |  
 - w-resize | text | wait | help  
 - url  

### icon  
 - auto | inherit  
 - url  

### nav-index  
 - auto | inherit  
 - number  

### nav-up  
 - auto | inherit \<id\> [current | root | \<target-name\>  

### nav-right  
 - auto | inherit \<id\> [current | root | \<target-name\>  

### nav-down  
 - auto | inherit \<id\> [current | root | \<target-name\>  

### nav-left  
 - auto | inherit \<id\> [current |  
 - root | \<target-name\>  

### resize  
 - none | both | horizontal |  
 - vertical | inherit  

***

## Pseudo-Class   [\^](#top)
| Element | Description |
| :--: | ------ |
|:active |an activated element|
|:focus |an element while the element has focus|
|:hover |an element when you mouse over it|
|:link |an unvisited link|
|:disabled |an element while the element is disabled|
|:enabled |an element while the element is enabled|
|:checked |an element that is checked|
|:selection |an element that is currently selected or highlighted by the user|
|:lang |allows the author to specify a language to use in a specified element|
|:nth-child(n) |an element that is the n-th sibling|
|:nth-last-child(n) |an element that is the n-th sibling counting from the last sibling|
|:first-child |an element that is the first sibling|
|:last-child |an element that is the last sibling|
|:only-child |an element that is the only child|
|:nth-of-type(n) |an element that is the n-th sibling of its type|
|:nth-last-of-type(n) |an element that is the n-th sibling of its type counting from the last sibling|
|:last-of-type |an element that is the last sibling of its type|
|:first-of-type |an element that is the first sibling of its type|
|:only-of-type |an element that is the only child of its type|
|:empty |an element that has no children|
|:root |root element within the document|
|:not(x) |an element not represented by the argument x|
|:target |a target element as specified by a target in a UR|

## Pseudo-Element   [\^](#top)
| Element | Description |
| :--: | ------ |
|::first-letter |Adds special style to the first letter of a text|
|::first-line |Adds special style to the first line of a text|
|::before |Inserts some content before the content of an element|
|::after |Inserts some content after the content of an element|

## Absolute Measurement  [\^](#top)
| Element | Description |
| :--: | ------ |
|% |percentage|
|cm |centimeter|
|in |inch|
|mm |milimeter|
|pc |pica (1p = 12 points)|
|pt |point (1pt = 1/72 inch)|
|px |pixel (1px = 1/96 inch)|

## Relative Measurement  [\^](#top)
| Element | Description |
| :--: | ------ |
|ch |width of the 0 glyph found in the font for the font size used to render|
|em |1em = current font size of current element|
|ex |x-height of the elements font|
|gd |the grid defined by layout-grid|
|rem |the font size of the root element|
|vh |the viewports height|
|vw |the viewport's width|
|vm |viewports height or width, whichever is smaller of the two|

## Angles  [\^](#top)
| Element | Description |
| :--: | ------ |
|deg |degrees|
|grad |grads|
|rad |radians|
|turn |turns|

## Time  [\^](#top)
| Element | Description |
| :--: | ------ |
|ms |mili-seconds|
|s |seconds|

## Frequency  [\^](#top)
| Element | Description |
| :--: | ------ |
|Hz |hertz|
|kHz |kilo-hertz|

## Colors  [\^](#top)
| Element | Description |
| :--: | ------ |
|color name |red, blue, green, dark green|
|rgb(x,y,z) |red = rgb(255,0,0)|
|rgb(x%,y%,z%) |red = rgb(100%,0,0)|
|rgba(x,y,z,alpha) |red = rgba(255,0,0,0)|
|#rrggbb |red = #ff0000 (or shorthand - #f00)|
|hsl(hue,saturation,lightness) |red = hsl (0, 100%, 50%)|
|flavor |An accent color (typically chosen by the user) to customize the user interface of the user agent itself.|
|currentColor |computer value of the currentColor keyword is the computed value of the color property|

## Selector Types  [\^](#top)
| Name | Info | Example |
| :-: | -- | -- |
Universal Any element * { font: 10px Arial; }
Type Any element of that type h1 { text-decoration:
underline; }
Grouping Multiple elements of different
types
h1, h2, h3 { font-family:
Verdana; }
Class Multiple elements of different
types when you dont want to
affect all instances of that type
.sampleClass {
text-decoration:
underline; }
Id A single element type when you
dont want to affect all instances
of that type
#sampleID {
text-decoration:
underline; }
Descendant An element that is below (in the
document tree) another element
- no matter how many levels
#gallery h1 {
text-decoration:
underline; }

