if (!document.referrer.startsWith('https://lichess.org/racer/')){
    return;
}

const intervalId = window.setInterval( function() {   
    const feedbackElem = document.getElementsByClassName('puzzle__feedback')[0];
    var afterRaceClass = feedbackElem.className.split(' ').find(x => x == 'after') ;

    if (afterRaceClass) {
        const failedPuzzlesLength = parseInt(sessionStorage.getItem('allBadPuzzlesLinkHrefLength'))
        if (failedPuzzlesLength == 0){
            return
        }

        const hrf = sessionStorage.getItem(`allBadPuzzlesLinkHref_${failedPuzzlesLength - 1}`)

        document.querySelector('.vote.vote-up')
            .addEventListener('click', () => { 
                sessionStorage.removeItem(`allBadPuzzlesLinkHref_${failedPuzzlesLength - 1}`)
                sessionStorage.setItem(`allBadPuzzlesLinkHrefLength`, failedPuzzlesLength - 1)
                window.location.href = hrf 
            })

        document.querySelector('.vote.vote-down')
            .addEventListener('click', () => { 
                sessionStorage.removeItem(`allBadPuzzlesLinkHref_${failedPuzzlesLength - 1}`)
                sessionStorage.setItem(`allBadPuzzlesLinkHrefLength`, failedPuzzlesLength - 1)
                window.location.href = hrf 
            })
            
        document.querySelector('.puzzle__more a:last-child')
            .addEventListener('click', () => { 
                sessionStorage.removeItem(`allBadPuzzlesLinkHref_${failedPuzzlesLength - 1}`)
                sessionStorage.setItem(`allBadPuzzlesLinkHrefLength`, failedPuzzlesLength - 1)
                window.location.href = hrf 
            })
        
        window.clearInterval(intervalId)
    }
}, 100);
