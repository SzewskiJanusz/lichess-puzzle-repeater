const trainingStartButtonHtml = document.createElement('button')
trainingStartButtonHtml.className = 'puz-history__filter button'
trainingStartButtonHtml.style = 'margin:10px'
trainingStartButtonHtml.textContent = 'Bad solved training'
trainingStartButtonHtml.onclick = () => {
    const allBadPuzzlesLinkHrefs = Array.from(document
        .querySelectorAll('a.puz-history__round__puzzle'))
        .filter(x => x.nextSibling.querySelectorAll('bad').length > 0)
        .map(x => x.href)

        for (let j; j < sessionStorage.length; j++){
            sessionStorage.removeItem(`allBadPuzzlesLinkHref_${j}`)
        }

        sessionStorage.removeItem(`allBadPuzzlesLinkHrefLength`)

        let i = 0
        for (let hrf of allBadPuzzlesLinkHrefs){
            sessionStorage.setItem(`allBadPuzzlesLinkHref_${i}`, hrf)
            i++
        }

        sessionStorage.setItem(`allBadPuzzlesLinkHrefLength`, i + 1)
        
        window.location.href = allBadPuzzlesLinkHrefs[0]
};

const intervalId = window.setInterval( function() {   
    var elem = document.getElementsByClassName("racer racer-app racer--play")[0];
    var afterRaceClass = elem.className.split(' ').find(x => x == 'racer--post') ;

    if (afterRaceClass) {
        document.querySelector('div.box__top__actions').appendChild(trainingStartButtonHtml)
        clearInterval(intervalId);
    }
}, 100);
