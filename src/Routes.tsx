import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const VideoKYCOne = React.lazy(() => import("pages/VideoKYCOne"));
const VideoKYCFour = React.lazy(() => import("pages/VideoKYCFour"));
const VideoKYC = React.lazy(() => import("pages/VideoKYC"));
const VideoKYCTwo = React.lazy(() => import("pages/VideoKYCTwo"));
const SignatureVerification = React.lazy(
  () => import("pages/SignatureVerification"),
);
const SignatureCapture = React.lazy(() => import("pages/SignatureCapture"));
const FaceVerification = React.lazy(() => import("pages/FaceVerification"));
const PhotoCapture = React.lazy(() => import("pages/PhotoCapture"));
const PanCardVerification = React.lazy(
  () => import("pages/PanCardVerification"),
);
const PanCardCapture = React.lazy(() => import("pages/PanCardCapture"));
const VideoCallOne = React.lazy(() => import("pages/VideoCallOne"));
const VideoCall = React.lazy(() => import("pages/VideoCall"));
const VideoKYCFive = React.lazy(() => import("pages/VideoKYCFive"));
const VideoKYCThree = React.lazy(() => import("pages/VideoKYCThree"));
const KYCPhotoClickTwo = React.lazy(() => import("pages/KYCPhotoClickTwo"));
const KYCPhotoClick = React.lazy(() => import("pages/KYCPhotoClick"));
const KYCPhotoClickOne = React.lazy(() => import("pages/KYCPhotoClickOne"));
const VideoCallTwo = React.lazy(() => import("pages/VideoCallTwo"));
const GetonVideocallOne = React.lazy(() => import("pages/GetonVideocallOne"));
const GetonVideocall = React.lazy(() => import("pages/GetonVideocall"));
const UploadAadharCard = React.lazy(() => import("pages/UploadAadharCard"));
const UploadPanCard = React.lazy(() => import("pages/UploadPanCard"));
const VideoKYCConsent = React.lazy(() => import("pages/VideoKYCConsent"));
const WelcomeBack = React.lazy(() => import("pages/WelcomeBack"));
const LetsStarted = React.lazy(() => import("pages/LetsStarted"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/letsstarted" element={<LetsStarted />} />
          <Route path="/welcomeback" element={<WelcomeBack />} />
          <Route path="/videokycconsent" element={<VideoKYCConsent />} />
          <Route path="/uploadpancard" element={<UploadPanCard />} />
          <Route path="/uploadaadharcard" element={<UploadAadharCard />} />
          <Route path="/getonvideocall" element={<GetonVideocall />} />
          <Route path="/getonvideocallone" element={<GetonVideocallOne />} />
          <Route path="/videocalltwo" element={<VideoCallTwo />} />
          <Route path="/kycphotoclickone" element={<KYCPhotoClickOne />} />
          <Route path="/kycphotoclick" element={<KYCPhotoClick />} />
          <Route path="/kycphotoclicktwo" element={<KYCPhotoClickTwo />} />
          <Route path="/videokycthree" element={<VideoKYCThree />} />
          <Route path="/videokycfive" element={<VideoKYCFive />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/videocallone" element={<VideoCallOne />} />
          <Route path="/pancardcapture" element={<PanCardCapture />} />
          <Route
            path="/pancardverification"
            element={<PanCardVerification />}
          />
          <Route path="/photocapture" element={<PhotoCapture />} />
          <Route path="/faceverification" element={<FaceVerification />} />
          <Route path="/signaturecapture" element={<SignatureCapture />} />
          <Route
            path="/signatureverification"
            element={<SignatureVerification />}
          />
          <Route path="/videokyctwo" element={<VideoKYCTwo />} />
          <Route path="/videokyc" element={<VideoKYC />} />
          <Route path="/videokycfour" element={<VideoKYCFour />} />
          <Route path="/videokycone" element={<VideoKYCOne />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
