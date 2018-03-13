

<div align="center">
    <img src="https://raw.githubusercontent.com/minewhat/speedupjs/master/logo.png">
</div>
<br />

  
**Why**: Most of the websites don't use a tag manager like GTM ( Google Tag Manager ) to load third party scripts or page specific scripts. These scripts and css links will slow down the page load speed. SpeedUp JS will enhance the performance by prioritizing scripts and defering their load after DOM Load event.

  - **Technology**: Speedup JS helps your mark all non critical script with "text/speedupjsscript" instead of "text/javascript". Once the DOM is loaded SpeedupJS will load them in the order its mentioned.


**Screenshot**: 

![](https://raw.githubusercontent.com/minewhat/speedupjs/master/screenshot.png)


## Dependencies

Absolutely no depedencies, its pure JS

## Installation
<script type="text/javascript>
  /* Paste the lastest code */
</script>  


## Usage

JS resources are of two types.
- **Inline JS**:
Any script tag inline with <script></script> need to be modified of form <script type="text/speedupscript"></script>


- **Externaly Linked JS**: Any externaly linked tag of form <script src="xyz.com/file.js"></script> need to be modified of form <script type="text/speedupscript" src="xyz.com/file.js"></script>

- **Shopify Script Tag**:  If you are a shopify store you might see snippets/XYZ.liquid containing lines like these  
{{ 'xyz.com/file.js' | script_tag }}  you need to change this to <script type="text/speedupscript" src="xyz.com/file.js"></script> . Essentially we are converting the default shopfiy expansion to speedjs type.

## Getting help

If you need any help on installation send us an email speedupjs (at) minewhat.com


## Getting involved

If you have any ideas, improvements feel free to send us a PR. 

----

## Open source licensing info
Apache 2.0 [License](LICENSE).

