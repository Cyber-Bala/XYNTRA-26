import './loadingscreen.css';

const Loadingscreen = () => {
    // 31 fur spans as per the provided snippet
    const furSpans = Array.from({ length: 31 }, (_, i) => (
        <span key={i} className={`fur-${i + 1}`}></span>
    ));

    // 28 lamp spans as per the provided snippet
    const lampSpans = Array.from({ length: 28 }, (_, i) => (
        <span key={i} className={`lamp-${i + 1}`}></span>
    ));

    return (
        <div id="container" className="intro-view">
            {/* Sequence Stage 1: Brand Text */}
            <div className="brand-stage">
                <h1 className="brand-text">XYNTRA</h1>
            </div>

            {/* Sequence Stage 2: The Intro X */}
            <div className="netflix-stage">
                <div className="netflixintro" letter="X">
                    <div className="helper-1">
                        <div className="effect-brush">
                            {furSpans}
                        </div>
                        <div className="effect-lumieres">
                            {lampSpans}
                        </div>
                    </div>
                    <div className="helper-2">
                        <div className="effect-brush">
                            {furSpans}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loadingscreen;
