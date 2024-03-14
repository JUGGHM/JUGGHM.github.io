document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function largeSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/img/nvidia/';
                        break;
                    case 1:
                        image.src = 'assets/img/jhu/';
                        break;
                    case 2:
                        image.src = 'assets/img/Barn/';
                        break;
                    case 3:
                        image.src = 'assets/img/Caterpillar/';
                        break;
                    case 4:
                        image.src = 'assets/img/Courthouse/';
                        break;
                    case 5:
                        image.src = 'assets/img/Ignatius/';
                        break;
                    case 6:
                        image.src = 'assets/img/Meetingroom/';
                        break;
                    case 7:
                        image.src = 'assets/img/Truck/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/rgb.png';
                        break;
                    case 1:
                        image.src = image.src + '/mesh.png';
                        break;
                    case 2:
                        image.src = image.src + '/normal.png';
                        break;
                }
            }

            scene_list = document.getElementById("large-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("large-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+2) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resource_new/depth/gundam';
                        break;
                    case 1:
                        image.src = 'resource_new/depth/venue';
                        break;
                    case 2:
                        image.src = 'resource_new/depth/sketch_driving';
                        break;
                    case 3:
                        image.src = 'resource_new/depth/underwater';
                        break;
                    case 4:
                        image.src = 'resource_new/depth/jojo';
                        break;;
                    case 5:
                        image.src = 'resource_new/depth/terra';
                        break;
                    case 6:
                        image.src = 'resource_new/depth/drone';
                        break;  
                    case 7:
                        image.src = 'resource_new/depth/panth';
                        break;
                    case 8:
                        image.src = 'resource_new/depth/terra';
                        break;
                    case 9:
                        image.src = 'resource_new/depth/train';
                        break;
                    case 10:
                        image.src = 'resource_new/depth/museum';
                        break;
                    case 11:
                        image.src = 'resource_new/depth/indoor';
                        break;;
                    case 12:
                        image.src = 'resource_new/depth/valley';
                        break;
                    case 13:
                        image.src = 'resource_new/depth/church';
                        break;   
                    case 14:
                        image.src = 'resource_new/depth/street2';
                        break;   
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_zoe.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resource_new/normal/gundam';
                        break;
                    case 1:
                        image.src = 'resource_new/normal/venue';
                        break;
                    case 2:
                        image.src = 'resource_new/normal/colo';
                        break;
                    case 3:
                        image.src = 'resource_new/normal/red_bird';
                        break;
                    case 4:
                        image.src = 'resource_new/normal/car';
                        break;
                    case 5:
                        image.src = 'resource_new/normal/starcraft';
                        break;
                    case 6:
                        image.src = 'resource_new/normal/arena';
                        break;
                    case 7:
                        image.src = 'resource_new/normal/chess';
                        break;
                    case 8:
                        image.src = 'resource_new/normal/panth';
                        break;
                    case 9:
                        image.src = 'resource_new/normal/rocket';
                        break;
                    case 10:
                        image.src = 'resource_new/normal/escalator';
                        break;
                    case 11:
                        image.src = 'resource_new/normal/train';
                        break;
                    case 12:
                        image.src = 'resource_new/normal/museum';
                        break;
                    case 13:
                        image.src = 'resource_new/normal/indoor';
                        break;
                    case 14:
                        image.src = 'resource_new/normal/campus';
                        break;
                    case 15:
                        image.src = 'resource_new/normal/bev_driving';
                        break;    
                    case 16:
                        image.src = 'resource_new/normal/catdog';
                        break;   
                    case 17:
                        image.src = 'resource_new/normal/street';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_omni.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }