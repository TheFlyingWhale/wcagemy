import HeaderPage from "../../components/headerPage/headerPage";
import ChapterContainer from "../../components/chapterContainer/chapterContainer";
import chapters from "./chapters";

import "./courseOverview.css";

const CourseOverview = () => {
    return (
        <div className="courseOverview">
            <HeaderPage> Kursoversikt </HeaderPage>
            <main className="courseOverviewMain p-top-25">
                {chapters.map((chapter) => {
                    return (
                        <ChapterContainer
                            title={chapter.title}
                            key={chapter.id}
                            subChapters={chapter.subChapters}
                            progression={chapter.progression}
                        ></ChapterContainer>
                    );
                })}
            </main>
        </div>
    );
};

export default CourseOverview;
