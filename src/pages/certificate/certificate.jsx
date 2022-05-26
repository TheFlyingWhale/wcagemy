import HeaderPage from "../../components/headerPage/headerPage";

import Container from "../../components/container/container";
import IconButton from "../../components/button/iconButton";

import LinkIcon from "../../assets/svg/link";

import "./certificate.css";

const Certificate = () => {
    return (
        <div className="certificate">
            <HeaderPage>Sertifikat</HeaderPage>
            <main className="certificateMain gap-25">
                <Container className="certificateContainer gap-25">
                    <div className="detailContainer">
                        <h2 className="fs-default ff-overpass c-blueDarker">
                            Navn
                        </h2>
                        <p className="fs-default ff-heebo c-black">
                            Geir Johansen
                        </p>
                    </div>
                    <div className="detailContainer">
                        <h2 className="fs-default ff-overpass c-blueDarker">
                            Sertifikat-id
                        </h2>
                        <p className="fs-default ff-heebo c-black">FK404404</p>
                    </div>
                    <div className="detailContainer">
                        <h2 className="fs-default ff-overpass c-blueDarker">
                            WCAG 2.0
                        </h2>
                        <p className="fs-default ff-heebo c-greenDark fw-bold">
                            Sertifisert
                        </p>
                    </div>
                    <div className="detailContainer">
                        <h2 className="fs-default ff-overpass c-blueDarker">
                            WCAG 2.1
                        </h2>
                        <p className="fs-default ff-heebo fw-bold c-red">
                            Usertifisert
                        </p>
                    </div>
                </Container>
                <IconButton icon={<LinkIcon />} withArrow={false}>
                    Kopier sertifikat url
                </IconButton>
            </main>
        </div>
    );
};

export default Certificate;
