import { SnackbarProvider } from "notistack";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { persistor, store } from "./redux/store";
import EventConferencePost from "./components/conferenceEvent";
import WebinarConferencePost from "./components/webinarEvent";
const NewsMedia = lazy(() => import("./components/NewsAndMedia"));
const HomePage = lazy(() => import("./components/HomePage"));
const Event = lazy(() => import("./components/Event"));
const Courses = lazy(() => import("./components/Courses"));
const Webinar = lazy(() => import("./components/Webinar"));
const About = lazy(() => import("./components/About"));
const Values = lazy(() => import("./components/Values"));
const Teams = lazy(() => import("./components/Team"));
const SystematiAndTargetedLiteratureReview = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/systematicAndTargeticLiteratureReview"
  )
);
const NewsLetter = lazy(() => import("./components/NewsLetter"));
const ConferenceActivities = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/conferenceActivities"
  )
);
const AddressJournalReviewComment = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/AddressJournalReviewComment"
  )
);
const ReformationAndReformatting = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/reformationAndResubmission"
  )
);
const PublicationSupport = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/publicationSupport"
  )
);
const PublicationDevelopement = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/publicationDevelopement"
  )
);
const Publicationplanning = lazy(() =>
  import(
    "./components/JournalPublicationConferencePresentation/publicationPlaning"
  )
);
const JournalPublic = lazy(() =>
  import("./components/JournalPublicationConferencePresentation/journalPublic")
);
const JournalPublicationConferencePresentation = lazy(() =>
  import("./components/JournalPublicationConferencePresentation")
);
const ReferenceAndAnotation = lazy(() =>
  import("./components/ScientificandMedical/referenceAndAnotation")
);
const OtherCommunication = lazy(() =>
  import("./components/ScientificandMedical/otherCommunication")
);
const MedicalEducation = lazy(() =>
  import("./components/ScientificandMedical/medicalEducation")
);
const MedicalInformation = lazy(() =>
  import("./components/ScientificandMedical/medicalInformation")
);
const PatentCentricCommunication = lazy(() =>
  import("./components/ScientificandMedical/patientCentricCommunication")
);
const MedicalCommunicationStrategy = lazy(() =>
  import("./components/ScientificandMedical/medicalCommunicationStrategy")
);
const ScientificAndMedical = lazy(() =>
  import("./components/ScientificandMedical")
);
const Career = lazy(() => import("./components/Career"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const WhitePapers = lazy(() => import("./components/WhitePaper"));
const InstitutionalTraining = lazy(() =>
  import("./components/InstitutionalTraining")
);
const Workshop = lazy(() => import("./components/Workshop"));
const WorkshopTabInfo = lazy(() => import("./components/WorkshopTabInfo"));
const Contact = lazy(() => import("./components/Contact"));
const Resources = lazy(() => import("./components/Resources"));
const LifeAtTuracoz = lazy(() => import("./components/LifeAtTuracoz"));
const EOLEngagement = lazy(() => import("./components/EOLEngagement"));
const CoursesTabInfo = lazy(() => import("./components/CoursesInfoTab"));
const Consultancy = lazy(() => import("./components/Consultancy"));
const LearningAndDevelopement = lazy(() =>
  import("./components/LearningAndDevelopement")
);
const ContentLabManagement = lazy(() =>
  import("./components/ContentLabManagement")
);
const QCReviewEditing = lazy(() => import("./components/QCReviewEditing"));
const AnnouncementPost = lazy(() => import("./components/Announcement"));
const RegulatoryWriting = lazy(() => import("./components/RegulatoryWriting"));
const WebinarTabInfo = lazy(() => import("./components/WebinarTabInfo"));
const RealWorldEvidenceAndClinicalTrailServices = lazy(() =>
  import("./components/RealEvidenceAndServices")
);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
          <Header />
          <Outlet />
          <Footer />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/news-media",
        element: (
          <Suspense fallback={<Loading />}>
            <NewsMedia />
          </Suspense>
        ),
      },
      {
        path: "/news-media/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <AnnouncementPost />
          </Suspense>
        ),
      },
      {
        path: "/events",
        element: (
          <Suspense fallback={<Loading />}>
            <Event />
          </Suspense>
        ),
      },
      {
        path: "/events/conference/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <EventConferencePost />
          </Suspense>
        ),
      },
      {
        path: "/events/webinar/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <WebinarConferencePost />
          </Suspense>
        ),
      },
      {
        path: "/training/courses",
        element: (
          <Suspense fallback={<Loading />}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "/training/courses/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <CoursesTabInfo />
          </Suspense>
        ),
      },
      {
        path: "/training/webinars",
        element: (
          <Suspense fallback={<Loading />}>
            <Webinar />
          </Suspense>
        ),
      },
      {
        path: "/training/webinars/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <WebinarTabInfo />
          </Suspense>
        ),
      },
      {
        path: "/training/workshops",
        element: (
          <Suspense fallback={<Loading />}>
            <Workshop />
          </Suspense>
        ),
      },
      {
        path: "/training/workshops/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <WorkshopTabInfo />
          </Suspense>
        ),
      },
      {
        path: "/training/institutional-training",
        element: (
          <Suspense fallback={<Loading />}>
            <InstitutionalTraining />
          </Suspense>
        ),
      },
      {
        path: "/newsletter/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <NewsLetter />
          </Suspense>
        ),
      },
      {
        path: "/case-studies/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <CaseStudies />
          </Suspense>
        ),
      },
      {
        path: "/whitepapers/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <WhitePapers />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "our-values",
            element: (
              <Suspense fallback={<Loading />}>
                <Values />
              </Suspense>
            ),
          },
          {
            path: "our-team",
            element: (
              <Suspense fallback={<Loading />}>
                <Teams />
              </Suspense>
            ),
          },
          {
            path: "life-at-turacoz",
            element: (
              <Suspense fallback={<Loading />}>
                <LifeAtTuracoz />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/resources",
        element: (
          <Suspense fallback={<Loading />}>
            <Resources />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<Loading />}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/solutions",
        children: [
          {
            path: "",
            element: <Navigate to="/" replace />,
          },
          {
            path: "scientific-and-medical-communication",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ScientificAndMedical />
                  </Suspense>
                ),
              },
              {
                path: "medical-communication-strategy",
                element: (
                  <Suspense fallback={<Loading />}>
                    <MedicalCommunicationStrategy />
                  </Suspense>
                ),
              },
              {
                path: "patient-centric-communication",
                element: (
                  <Suspense fallback={<Loading />}>
                    <PatentCentricCommunication />
                  </Suspense>
                ),
              },
              {
                path: "medical-information",
                element: (
                  <Suspense fallback={<Loading />}>
                    <MedicalInformation />
                  </Suspense>
                ),
              },
              {
                path: "medical-education",
                element: (
                  <Suspense fallback={<Loading />}>
                    <MedicalEducation />
                  </Suspense>
                ),
              },
              {
                path: "other-communications",
                element: (
                  <Suspense fallback={<Loading />}>
                    <OtherCommunication />
                  </Suspense>
                ),
              },
              {
                path: "referencing-and-annotation",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ReferenceAndAnotation />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "journal-publications-conference-presentation",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loading />}>
                    <JournalPublicationConferencePresentation />
                  </Suspense>
                ),
              },
              {
                path: "journal-publications",
                element: (
                  <Suspense fallback={<Loading />}>
                    <JournalPublic />
                  </Suspense>
                ),
              },
              {
                path: "publication-planning",
                element: (
                  <Suspense fallback={<Loading />}>
                    <Publicationplanning />
                  </Suspense>
                ),
              },
              {
                path: "publication-development",
                element: (
                  <Suspense fallback={<Loading />}>
                    <PublicationDevelopement />
                  </Suspense>
                ),
              },
              {
                path: "publication-support",
                element: (
                  <Suspense fallback={<Loading />}>
                    <PublicationSupport />
                  </Suspense>
                ),
              },
              {
                path: "reformatting-and-resubmission",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ReformationAndReformatting />
                  </Suspense>
                ),
              },
              {
                path: "addressing-journal-review-comments",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AddressJournalReviewComment />
                  </Suspense>
                ),
              },
              {
                path: "conference-activities",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ConferenceActivities />
                  </Suspense>
                ),
              },
              {
                path: "systematic-literature-review-and-targeted-literature-review",
                element: (
                  <Suspense fallback={<Loading />}>
                    <SystematiAndTargetedLiteratureReview />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "real-world-evidence-clinical-trial-services",
            element: (
              <Suspense fallback={<Loading />}>
                <RealWorldEvidenceAndClinicalTrailServices />
              </Suspense>
            ),
          },
          {
            path: "kol-engagement-advocacy-building",
            element: (
              <Suspense fallback={<Loading />}>
                <EOLEngagement />
              </Suspense>
            ),
          },
          {
            path: "consultancy",
            element: (
              <Suspense fallback={<Loading />}>
                <Consultancy />
              </Suspense>
            ),
          },
          {
            path: "learning-and-development",
            element: (
              <Suspense fallback={<Loading />}>
                <LearningAndDevelopement />
              </Suspense>
            ),
          },
          {
            path: "content-lab-management",
            element: (
              <Suspense fallback={<Loading />}>
                <ContentLabManagement />
              </Suspense>
            ),
          },
          {
            path: "qc-reviewcopy-editing",
            element: (
              <Suspense fallback={<Loading />}>
                <QCReviewEditing />
              </Suspense>
            ),
          },
          {
            path: "regulatory-writing",
            element: (
              <Suspense fallback={<Loading />}>
                <RegulatoryWriting />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogPost />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
