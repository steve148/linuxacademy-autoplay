const textPhrases = [
    'Mark Complete & Start Next Lesson',
    'Complete Section & Return to Course Module'
]

const main = async () => {
    const videos = document.getElementsByTagName('video');
    const video = videos[0];

    video.muted = true;

    await video.play();

    video.muted = false;

    video.onended = function () {
        const spans = [...document.querySelectorAll('span')];

        const span = spans.filter(span => textPhrases.some(phrase => span.textContent == phrase))[0]

        const event = new Event('click', { bubbles: true });
        span.dispatchEvent(event);
    }
}


main()
