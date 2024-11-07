
let lb = document.getElementById('left_button')
let slides = document.getElementById('slide_img_1')
let count = 0;
function left_btn() {


    if (count < 2) {
        count++;

        if (count == 1) {
            let img = document.getElementById('a')
            img.setAttribute('src', 'https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg')

        }
        else if (count == 2) {
            let img = document.getElementById('a')

            img.setAttribute('src', 'https://wallup.net/wp-content/uploads/2018/10/07/541540-wallpaper-hd-tiger-eyes-hd-pictures-4-hd-wallpapers-748x468.jpg')

        }


        console.log(count);
    }



}

function right_btn() {
    if (count > 0) {
        count--

        if (count == 0) {
            let img = document.getElementById('a')
            img.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-lion-lion-wallpapers-hd-desktop-wallpapers-image_2563165.jpg')

        }
        else if (count == 1) {
            let img = document.getElementById('a')

            img.setAttribute('src', 'https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg')

        }

        console.log(count);
    }
}

// let lb = document.getElementById('left_button');
// let slides = document.getElementById('slide_img_1');
// let count = 0;

// function left_btn() {
//     if (count < 2) {
//         count++;
//         updateImage();
//     }
//     console.log(count);
// }

// function right_btn() {
//     if (count > 0) {
//         count--;
//         updateImage();
//     }
//     console.log(count);
// }

// function updateImage() {
//     let img = document.getElementById('a');

//     if (count == 0) {
//         img.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-lion-lion-wallpapers-hd-desktop-wallpapers-image_2563165.jpg');
//     } else if (count == 1) {
//         img.setAttribute('src', 'https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg');
//     } else if (count == 2) {
//         img.setAttribute('src', 'https://wallup.net/wp-content/uploads/2018/10/07/541540-wallpaper-hd-tiger-eyes-hd-pictures-4-hd-wallpapers-748x468.jpg');
//     }
// }
