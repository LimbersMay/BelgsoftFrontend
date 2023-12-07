import {ReactElement} from "react";

interface CreateUserModalProps {
    children?: ReactElement;
    show: boolean;
    onClose: () => void;
    mode: 'Create' | 'Update';
}

export const ModalLayout = ({children, mode, show, onClose}: CreateUserModalProps) => {
    return (
        <>
            {
                show && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                        <div className="relative z-50 bg-white p-4 max-w-md mx-auto rounded shadow-lg flex flex-col gap-2">
                            {
                                <h2 className="text-2xl font-bold text-green-800">
                                    <span className="text-neutral-950 mr-2">{mode}</span>
                                    <span className="text-green-800">Record</span>
                                </h2>
                            }

                            <hr/>

                            {children}
                        </div>
                    </div>
                )
            }
        </>
    );
};