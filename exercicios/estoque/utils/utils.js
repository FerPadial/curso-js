const maiorZIndex=()=>{
    return Math.max(
        ...Array.from(
            document.querySelectorAll('body *'),
            (el)=>{parseFloat(window,getComputedStyle(el).zIndex)},
        ).filter((zIndex)=>{!Number.isNaN(zIndex)}),
        0,
    );
}

const qual_ZIndex=(el)=>{
    return Math.max(
        ...Array.from(
            el,
            (el)=>{parseFloat(window,getComputedStyle(el).zIndex)},
        ).filter((zIndex)=>{!Number.isNaN(zIndex)}),
        0,
    );
}