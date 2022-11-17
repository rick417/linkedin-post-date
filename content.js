// convert linkedin postID in unix timestamp
// https://dfir.blog/tinkering-with-tiktok-timestamps/
if ((/([0-9]{19})/).exec(document.location.href).pop().length === 19) {
    setTimeout(() => {
        let timestampLinkedinPost = () => {
            let postId = (/([0-9]{19})/).exec(document.location.href).pop(),
                timestamp = parseInt(BigInt(postId).toString(2).slice(0, 41), 2),
                dateObject = new Date(timestamp),
                parsedDate = dateObject.toLocaleDateString("en-EN") + `  ${dateObject.getHours()}h${dateObject.getMinutes()}m${dateObject.getSeconds()}s`;
            console.log(`PostID ${postId} - ${parsedDate} (unix : ${timestamp})`);
            // show the full date in the DOM 
            if (document.querySelector('main').querySelector('li-icon').parentNode.type !== "button") {
                document.querySelector('main').querySelector('li-icon').parentNode.innerHTML = `${parsedDate} (unix : ${timestamp})`;
            }
        }

        timestampLinkedinPost();
    }, 1000)
}