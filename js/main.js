const sectionInfo = () => {
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
        console.log(sceneInfo)
    }

    window.addEventListener('resize', setLayout);

    setLayout();
}
sectionInfo();