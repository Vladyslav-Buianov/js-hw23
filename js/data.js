const itemsRef = document.querySelectorAll(".images__item");
// дістаємо доступ до лішків

const lisObserver = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const img = entry.target.querySelector(".images__img");
            // дістаємо доступ до фотків
            if (img) {
                img.src = img.dataset.src;
                img.classList.add("active");
            }
            observer.unobserve(entry.target);
        }
        // якщо лішка в полі зору то втавляємо src з дата-атрибута фотки до фотки, додаєм анімації і перестаємо дивитися за лішкою.
    })
}, {rootMargin: "40px" 
// тут написана довжина від лішки у якій вона буде в полі зору
})

itemsRef.forEach(lis => {
    lisObserver.observe(lis);
})
// дивимось за кожною лішкою