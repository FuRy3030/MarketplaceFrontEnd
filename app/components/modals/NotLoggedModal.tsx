import { EuiButton, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle } from "@elastic/eui";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import UseGoogle from "../../api/requests/auth/mutations/UseGoogle";

function NotLoggedModal({ IsFromUpperComponentModalVisible } : { IsFromUpperComponentModalVisible: boolean }) {
    const [IsModalVisible, SetIsModalVisible] = useState<boolean>(true);
    const CloseModal = () => SetIsModalVisible(false);

    const { mutate } = UseGoogle();

    const OnGoogleLoginSuccess = (CredentialResponse: CredentialResponse) => {
        if (CredentialResponse.credential) {
            mutate(CredentialResponse.credential);
        }
    };
  
    if (IsModalVisible && IsFromUpperComponentModalVisible) {
        return (
            <EuiModal style={{ width: 800 }} onClose={CloseModal}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        Zaloguj się aby uzyskać dostęp
                    </EuiModalHeaderTitle>
                </EuiModalHeader>  
                <EuiModalBody className="ChildFlex">
                    <div className="flex flex-col md:flex-row w-full justify-center md:justify-evenly md:items-center cursor-default my-4">
                        <img 
                            src="/flaticon/security.png" 
                            alt="Załóż konto"
                            className="w-[60%] mb-7 md:w-[20%] md:mb-0 h-auto mx-auto"
                        />
                        <p className="w-full md:w-[55%] font-semibold text-semi-dark-alt mb-0">
                            Aby poznać dostępnych mentorów, znaleźć wymarzoną olimpiadę lub umówić konsultację musisz zalogować się na swoje konto. Jeżeli go nie posiadasz możesz je utworzyć lub zalogować się przez Google
                        </p>
                    </div>
                </EuiModalBody>   
                <EuiModalFooter className="CustomPaddingInlineFooter">
                    <div className="mr-auto">
                        <GoogleLogin
                            onSuccess={OnGoogleLoginSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                    <EuiButton onClick={CloseModal} fill>
                        Zamknij
                    </EuiButton>
                </EuiModalFooter>
            </EuiModal>
        );
    }

    return null;
};

export default NotLoggedModal;