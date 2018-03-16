

<div align="center">
    <img src="https://raw.githubusercontent.com/minewhat/speedupjs/master/logo.png">
</div>
<br />

[![Build Status](https://travis-ci.org/minewhat/speedupjs.svg?branch=master)](https://travis-ci.org/minewhat/speedupjs)
  
**Why**: Most of the websites don't use a tag manager like GTM ( Google Tag Manager ) to load third party scripts or page specific scripts. These scripts and css links will slow down the page load speed. SpeedUp JS will enhance the performance by prioritizing scripts and defering their load after DOM Load event.

  - **Technology**: Speedup JS helps your mark all non critical script with "text/speedupjsscript" instead of "text/javascript". Once the DOM is loaded SpeedupJS will load them in the order its mentioned.


**Screenshot**: 

![](https://raw.githubusercontent.com/minewhat/speedupjs/master/screenshot.png)


## Dependencies

Absolutely no depedencies, its pure JS

## Installation
```
<script type="text/javascript src="https://d1kseyj81rxrhk.cloudfront.net/resources/speedup.js"></script>  
```


## Usage

JS resources are of two types.
- **Inline JS**:
Any script tag inline with `<script></script>` need to be modified of form `<script type="text/speedupscript"></script>`


- **Externaly Linked JS**: Any externaly linked tag of form `<script src="xyz.com/file.js"></script>` need to be modified of form `<script type="text/speedupscript" src="xyz.com/file.js"></script>`

- **Shopify Script Tag**:  If you are a shopify store you might see snippets/XYZ.liquid containing lines like these  
{{ 'xyz.com/file.js' | script_tag }}  you need to change this to `<script type="text/speedupscript" src="xyz.com/file.js"></script>`. Essentially we are converting the default shopfiy expansion to speedjs type.

CSS resources are of two types.
- **Inline CSS**:
Any style tag inline with `<style type="text/css"></style>` need to be modified of form `<style type="text/speedupcss"></style>`.

- **Externaly Linked CSS**: Any externaly linked tag of form `<link rel="stylesheet" type="text/css" href="xyz.com/file.css">` need to be modified of form `<link rel="stylesheet" type="text/speedupcss" href="xyz.com/file.css">`

## Getting help

If you need any help on installation send us an email speedupjs (at) minewhat.com


## Getting involved

If you have any ideas, improvements feel free to send us a PR. 

----

## Open source licensing info
Apache 2.0 [License](LICENSE).

