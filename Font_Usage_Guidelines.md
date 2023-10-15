# My Phone V.2 Font Usage Guidelines
##### This MD tells about the font we use in our project
#
## About The Font
We use Product Sans Regular by Google LLC licensed by [befonts.com](https://befonts.com/product-sans-font.html)

## How to Use
To use this font.. You have to [download this ttf](https://github.com/My-Phone-Workdesk/My-Phone-V.2/raw/main/Design/Product_Sans_Regular.ttf) and put it wherever you like   
Then create a css file and add the following code in it

    @font-face {
        font-family: '[any name you like]';
        src: url('[Path to ttf]') format('embedded-opentype'), /* Internet Explorer */
             url('Path to ttf') format('woff2'), /* Super Modern Browsers */
             url('Path to ttf') format('woff'), /* Pretty Modern Browsers */
             url('Path to ttf') format('truetype'), /* Safari, Android, iOS */
             url('Path to ttf') format('svg'); /* Legacy iOS */
    }
    * {
        font-family: '[The name you wrote above]'; 
    }
Lastly, create a html file and use the css in it by pasting this

    <link rel="stylesheet" href="[Path to css]">
Now, every content in the html will have the font.

#### Example:
(CSS) index.css

    @font-face { 
    font-family: 'main'; 
        src: 
            url('./Design/Product_Sans_Regular.ttf') format('embedded-opentype'), /* Internet Explorer */ 
            url('./Design/Product_Sans_Regular.ttf') format('woff2'), /* Super Modern Browsers */ 
            url('./Design/Product_Sans_Regular.ttf') format('woff'), /* Pretty Modern Browsers */ 
            url('./Design/Product_Sans_Regular.ttf') format('truetype'), /* Safari, Android, iOS */ 
            url('./Design/Product_Sans_Regular.ttf') format('svg'); /* Legacy iOS */
    }
    * { 
    font-family: 'main'; 
    }
(HTML) index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Design/index.css">
    </head>
    <body>
        <div>
            Sample Text
        </div>
    </body>