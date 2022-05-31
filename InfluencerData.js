

var sectionTypes = [];
var sectionContent = [];
var rightContentScrollData = [];


function rightContentScroll() {
    let data = `<div>`;
    rightContentScrollData.map(({ id, text, imgSrc }) => {
        data = data + `<section class="section-item"><p class="u-no-padding--bottom">${text}</p>
            <img class="right-section-img" src=${imgSrc}> </img></section>`;
    });
    data = data + `</div>`
    return data;
}
function MainPage() {
    return sectionTypes.map(({ sectionId, sectionName, sectionUrl, sectionImageSrc }) => {
        let data = "";
        if (sectionId % 2 !== 0) {
            data =
                data +
                `<div class="row">
                   <div class="col-5">
                     <div class="p-card">
                        <h3>${sectionName}</h3> 
                           <div class="p-card__content">
                               <img class="p-card__image" alt="" height="185" width="330" src="${sectionImageSrc}">`;
            let outerSectionId = sectionId;

            sectionContent.map(({ sectionId, sectionHeader, articleList }) => {
                if (sectionId === outerSectionId) {
                    const { paragraph, adInfo, bottomInfo } = articleList
                        ? articleList[0]
                        : null;
                    data =
                        data + `<h4>${sectionHeader}</h4>
                                     <p class="u-no-padding--bottom">${paragraph}</p>
                                   <p style="font-size:10px;">${adInfo.Adpartner}</p>
                                   <p class="u-no-padding--bottom">${bottomInfo}</p>`
                }
                else return null;
            });
            data =
                data +
                `<a style="display:flex;justify-content:center;" href=${sectionUrl}>See All </a>
                           </div>
                       </div>
                   </div>`;
        } else {
            data =
                data +
                `<div class="col-5">    
                     <div class="p-card">
                        <h3>${sectionName}</h3> 
                           <div class="p-card__content">
                               <img class="p-card__image" alt="" height="185" width="330" src="${sectionImageSrc}">`;
            let outerSectionId = sectionId;

            sectionContent.map(({ sectionId, sectionHeader, articleList }) => {
                if (sectionId === outerSectionId) {
                    const { paragraph, adInfo, bottomInfo } = articleList
                        ? articleList[0]
                        : null;
                    data = data + `<h4>${sectionHeader}</h4>
                                     <p class="u-no-padding--bottom">${paragraph}</p>
                                   <p style="font-size:10px;">${adInfo.Adpartner}</p>
                                   <p class="u-no-padding--bottom">${bottomInfo}</p>`
                }
                else return null;
            });
            data =
                data +
                `<a style="display:flex;justify-content:center;" href=${sectionUrl}>See All </a>
                           </div>
                       </div>
                   </div>
                   </div>`;
        }
        if (sectionId % 2 !== 0 && sectionId === sectionTypes.length)
            data = data + `</div>`;

        console.log(data);
        return data;
    });
}

window.onload = async function () {
    await fetch('sectionTypes.json').then(res => res.json()).then(res => { sectionTypes = res });
    await fetch('sectionContent.json').then(res => res.json()).then(res => {  sectionContent = res });
    await fetch('rightScrollData.json').then(res => res.json()).then(res => {  rightContentScrollData = res });
    console.log(sectionTypes)
    document.getElementById("grid1").innerHTML =
        '<h2>Lifestyle > </h2>' +
        MainPage() +
        '<h2>Entertainment > </h2>';

    document.getElementById("grid2").innerHTML = rightContentScroll();

};
