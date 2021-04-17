const sectionInfo = () => {

    let yOffset = 0; // window.pageYOffset 대신
    let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)

    const sceneInfo = [
        {
            // 0 section
            type: "sticky",
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            obj: {
                container: document.querySelector("#scroll-section-0")
            }
        },
        {
            // 1 section
            type: "normal",
            heightNum: 5,
            scrollHeight: 0,
            obj: {
                container: document.querySelector("#scroll-section-1")
            }
        },
        {
            // 2 section
            type: "sticky",
            heightNum: 5,
            scrollHeight: 0,
            obj: {
                container: document.querySelector("#scroll-section-2")
            }
        },
        {
            // 3 section
            type: "sticky",
            heightNum: 5,
            scrollHeight: 0,
            obj: {
                container: document.querySelector("#scroll-section-3")
            }
        }
    ]

    // 각 스크롤 섹션의 높이 세팅
    const setLayout = () => {
        for (const i of sceneInfo) {
            i.scrollHeight = i.heightNum * window.innerHeight;
            i.obj.container.style.height = `${i.scrollHeight}px`;
        }
        console.log(sceneInfo);

        // 새로고침시 body id 계산
        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for(let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id',`show-scene-${currentScene}`);
    }

    const scrollLoop = () => {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        // 현재 스크롤 위치가 이전 scene들의 합 + 현재 scene 보다 커지면 다음 scene으로 넘어간다.
        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
            document.body.setAttribute('id',`show-scene-${currentScene}`);
        }
        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return; // 브라우저 바운스 효과로 마이너스 방지(모바일)
            currentScene--;
            document.body.setAttribute('id',`show-scene-${currentScene}`);
        }

        
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset; // 현재 스크롤 값
        scrollLoop();
    });
    window.addEventListener('load',setLayout);
    window.addEventListener('resize', setLayout);

    setLayout();
}
sectionInfo();