---
# Video-holder
### Angular one-page web app designed for storing notes and videos

![Video holder screenshot](https://pictures-api.migra.ml/wwwroot/pictures/video-holder-ss.png)
---

> ## What should I know before I host this app?
> * Only **you** as admin can post things on this app.
> * There is **no admin panel**, you have to use `./assets/app-settings/items.json` to manage content.
> * If you want to embed videos from ex. YouTube, you need to adjust `./assets/app-settings/settings.json`.
> * If you want to modify header or footer content, you need to adjust `./assets/app-settings/ui-content.json`.
> * You can post items either via local path, or embed it on a site via link.



> ## Setting things up
> * Copy the source code from `https://github.com/Majkoo/Video-Holder` and host it on any HTTP server, such as nginx or apache.
> * You should set `appOrigin` in `./assets/app-settings/settings.json` to origin where the app is hosted. <br>
>```js
>// For example, we can set it up like this:
>    { 
>        appOrigin: "https://migra.ml"
>    }
>```
> * Done! Now you can run `index.html` on any browser, the app should work fine. 

> ## Changing header and footer content
> * Go to `./assets/app-settings/ui-content.json`, and set it up for yourself.
>```json
> {
>   "header" : {
>     "title": "Video Holder",
>     "searchBarPlaceholder": "Search"
>   },
>   "footer" : {
>     "paragraphs": [
>       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, veritatis!"
>     ],
>     "links": [
>       {
>       "text": "https://migra.ml",
>       "href": "https://migra.ml"
>       }
>     ]
>   }
> }
>```
> ### This is how the site should look like on this example setup:
> ![Video holder screenshot example 1](https://pictures-api.migra.ml/wwwroot/pictures/video-holder-ss-ex1.png)

> ## How to post an image or a video on this site?
> * First, go to root app directory, and open items.json
> ### Let's assume that this is our JSON file:
> ```json
> [
>   {
>     "type": "video",
>     "title": "Lorem ipsum video",
>     "description": "Lorem ipsum dolor sit amet...",
>     "src": "./assets/videos/ship-placeholder.mp4"
>   },
>   {
>     "type": "image",
>     "title": "Lorem ipsum image",
>     "description": "Lorem ipsum image",
>     "src": "./assets/images/placeholderLorem.jpg"
>   }
> ]
> ```
> ### Then this is how our site should look like:
> ![Video holder screenshot example 1](https://pictures-api.migra.ml/wwwroot/pictures/video-holder-ss-ex1.png)
> ### Posting an item:
> * To post an item, add another JSON object to the array.
> * **Important:** Valid values for `"type"` are only `"video"` and `"image"`.
> * If it's a file, you should put it in `./assets/images` or `./assets/videos` directory.
> ### Examples:
> ```json
> {
>   "type": "video",
>   "title": "Placeholder video",
>   "description": "This is a sample video, posted here using local source path",
>   "src": "./assets/videos/placeholder.mp4"
> }
> ```
> ```json
> {
>   "type": "video",
>   "title": "Placeholder YouTube video",
>   "description": "This is a sample video, posted here using YouTube embed link",
>   "src": "https://www.youtube.com/embed/u31qwQUeGuM"
> }
> ```
> ```json
> {
>   "type": "image",
>   "title": "Placeholder Image, local path",
>   "description": "Placeholder Image, local path",
>   "src": "./assets/images/placeholder.jpg"
> }
> ```
> ```json
> {
>   "type": "image",
>   "title": "Placeholder Image, embed via link",
>   "description": "Placeholder Image, embed via link",
>   "src": "https://pictures-api.migra.ml/wwwroot/pictures/placehold-img1.jpg"
> }
> ```
> ### So, after adding these 4 items, our JSON should look like this:
> ```json
> [
>   {
>     "type": "video",
>     "title": "Lorem ipsum video",
>     "description": "Lorem ipsum dolor sit amet...",
>     "src": "./assets/videos/ship-placeholder.mp4"
>   },
>   {
>     "type": "image",
>     "title": "Lorem ipsum image",
>     "description": "Lorem ipsum image",
>     "src": "./assets/images/placeholderLorem.jpg"
>   },
>   {
>     "type": "video",
>     "title": "Placeholder video",
>     "description": "This is a sample video, posted here using local source path",
>     "src": "./assets/videos/placeholder.mp4"
>   },
>   {
>     "type": "video",
>     "title": "Placeholder YouTube video",
>     "description": "This is a sample video, posted here using YouTube embed link",
>     "src": "https://www.youtube.com/embed/u31qwQUeGuM"
>   },
>   {
>     "type": "image",
>     "title": "Placeholder Image, local path",
>     "description": "Placeholder Image, local path",
>     "src": "./assets/images/placeholder.jpg"
>   },
>   {
>     "type": "image",
>     "title": "Placeholder Image, embed via link",
>     "description": "Placeholder Image, embed via link",
>     "src": "https://pictures-api.migra.ml/wwwroot/pictures/placehold-img1.jpg"
>   }
> ]
> ```
> ### And our site now looks like this:
> ![Video holder screenshot example 2](https://pictures-api.migra.ml/wwwroot/pictures/video-holder-ss-ex2.png)

>Live version of this app is running here: [https://video-holder.migra.ml](https://video-holder.migra.ml) <br>
>Thank you, that's all. Enjoy using the site.
