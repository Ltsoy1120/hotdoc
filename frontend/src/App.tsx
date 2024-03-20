import { Route, Routes } from "react-router"
import AuthLayout from "./app/layouts/AuthLayout"
import MainLayout from "./app/layouts/MainLayout"
import NewPasswordPage from "./app/pages/auth/NewPasswordPage"
import RegCompletedPage from "./app/pages/auth/RegCompletedPage"
import SignInPage from "./app/pages/auth/SignInPage/SignInPage"
import CodeConfirmationPage from "./app/pages/auth/CodeConfirmationPage"
import RegistrationPage from "./app/pages/auth/RegistrationPage"
import ECPConfirmationPage from "./app/pages/auth/ECPConfirmationPage"
import RecoveryPasswordPage from "./app/pages/auth/RecoveryPasswordPage"
import SuccessPasswordPage from "./app/pages/auth/SuccessPasswordPage"
import GeneralErrorModal from "./app/components/modals/ErrorModal/ErrorModal"
import DocumentsAllPage from "./app/pages/documents/DocumentsAllPage"
import DocumentsInboxPage from "./app/pages/documents/DocumentsInboxPage"
import DocumentsSentPage from "./app/pages/documents/DocumentsSentPage"
import ActionArchivePage from "./app/pages/ActionArchivePage"
import FoldersPage from "./app/pages/FoldersPages/FoldersPage"
import ContragentsPage from "./app/pages/contragents/ContragentsPage"
import EmployeesPage from "./app/pages/employees/EmployeesPage"
import DocumentsDraftsPage from "./app/pages/documents/DocumentsDtraftsPage"
import InboxToSign from "./app/pages/documents/DocumentsInboxPage/InboxToSign"
import InboxForApproval from "./app/pages/documents/DocumentsInboxPage/InboxForApproval"
import InboxSigned from "./app/pages/documents/DocumentsInboxPage/InboxSigned"
import NewDocumentPage from "./app/pages/documents/NewDocumentPage"
import ProfilePage from "./app/pages/profile/ProfilePage"
import EditCompanyPage from "./app/pages/profile/EditCompanyPage"
import EditProfilePage from "./app/pages/profile/EditProfilePage"
import NewEmployeePage from "./app/pages/employees/NewEmployeePage"
import "./app/assets/scss/base.scss"
import NewContragentPage from "./app/pages/contragents/NewContragentPage"
import ContragentById from "./app/pages/contragents/ContragentById"
import EditContragentPage from "./app/pages/contragents/EditContragentPage"
import EditEmployeePage from "./app/pages/employees/EditEmployeePage"

function App() {
  return (
    <div className="wrapper">
      <GeneralErrorModal />
      <Routes>
        <Route path="/">
          <Route element={<AuthLayout />}>
            <Route index element={<RegistrationPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="new-password" element={<NewPasswordPage />} />
            <Route
              path="recovery-password"
              element={<RecoveryPasswordPage />}
            />
            <Route path="success-password" element={<SuccessPasswordPage />} />
            <Route
              path="code-confirmation"
              element={<CodeConfirmationPage />}
            />
            <Route path="ecp-confirmation" element={<ECPConfirmationPage />} />

            <Route
              path="registration-completed"
              element={<RegCompletedPage />}
            />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/documents/new" element={<NewDocumentPage />} />
            <Route path="/documents/all" element={<DocumentsAllPage />} />
            <Route path="/documents/inbox" element={<DocumentsInboxPage />} />
            <Route path="/documents/inbox/to-sign" element={<InboxToSign />} />
            <Route
              path="/documents/inbox/for-approval"
              element={<InboxForApproval />}
            />
            <Route path="/documents/inbox/signed" element={<InboxSigned />} />
            <Route path="/documents/sent" element={<DocumentsSentPage />} />

            <Route path="/action-archive" element={<ActionArchivePage />} />
            <Route path="/folders" element={<FoldersPage />} />

            <Route path="/contragents">
              <Route index element={<ContragentsPage />} />
              <Route path="new" element={<NewContragentPage />} />
              <Route path=":id" element={<ContragentById />} />
              <Route path="edit/:id" element={<EditContragentPage />} />
            </Route>

            <Route path="/employees">
              <Route index element={<EmployeesPage />} />
              <Route path="new" element={<NewEmployeePage />} />
              <Route path="edit/:id" element={<EditEmployeePage />} />
            </Route>

            <Route path="/documents/drafts" element={<DocumentsDraftsPage />} />

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />
            <Route path="/profile/company/edit" element={<EditCompanyPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
