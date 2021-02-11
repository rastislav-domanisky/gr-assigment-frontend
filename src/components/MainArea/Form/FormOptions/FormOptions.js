import React from 'react';
import './FormOptions.scss';
import FormOption from './FormOption/FormOption';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

const FormOptions = (props) => {
    return (
        <div className="FormOptions">
            <FormOption
                click={props.onUpdateOption}
                value="SPECIFIC"
                isLeft={true}
                isChoosed={
                    props.currentOption === "SPECIFIC" ? true : false
                }>
                <div className="icon">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M1.56723 1.75567L17.6296 5.76613C19.5641 6.24946 21.1459 8.27583 21.1459 10.2708V24.7708C21.1459 26.7645 19.5581 28.0212 17.6175 27.5645L4.13252 24.3938C2.19194 23.9358 0.604187 21.9312 0.604187 19.9375V4.22913C0.604187 2.23417 2.23544 0.604126 4.22919 0.604126H24.7709C26.7646 0.604126 28.3959 2.23417 28.3959 4.22913V17.5208C28.3959 19.5145 26.7646 21.1458 24.7709 21.1458H21.1459" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.4792 4.22913H23.5625" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.7084 18.7291C17.043 18.7291 18.125 17.6471 18.125 16.3124C18.125 14.9777 17.043 13.8958 15.7084 13.8958C14.3737 13.8958 13.2917 14.9777 13.2917 16.3124C13.2917 17.6471 14.3737 18.7291 15.7084 18.7291Z" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.1459 10.2708H23.5625" stroke="#9F9F9F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="29" height="29" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="text">
                    Chcem finančne prispieť konkrétnemu útulku
                </div>
            </FormOption>
            <FormOption
                isLeft={false}
                click={props.onUpdateOption}
                value="GENERAL"
                isChoosed={
                    props.currentOption === "GENERAL" ? true : false
                }>
                <div className="icon">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.142 19.3238C22.8544 16.5619 19.963 15.0408 17.0001 15.0408C14.0371 15.0408 11.1456 16.5619 8.85818 19.3238C6.80198 21.8064 5.57452 24.9352 5.57452 27.6934C5.57452 29.0332 5.98412 30.0537 6.79188 30.7267C7.58916 31.3911 8.64176 31.6158 9.81609 31.6157C11.0657 31.6157 12.4531 31.3612 13.8164 31.1112C15.0077 30.8926 16.1329 30.6862 17.0001 30.6862C17.7486 30.6862 18.804 30.8821 19.9212 31.0895C22.5321 31.5743 25.4914 32.1236 27.2009 30.7022C28.0136 30.0265 28.4256 29.0142 28.4256 27.6934C28.4257 24.9352 27.1982 21.8064 25.142 19.3238ZM25.9272 29.1704C24.9363 29.9944 22.3571 29.5155 20.2847 29.1309C19.0747 28.9062 17.9319 28.694 17 28.694C15.9515 28.694 14.7398 28.9164 13.4568 29.1517C11.4692 29.5163 8.99557 29.9701 8.06695 29.1963C7.94317 29.0931 7.56651 28.7793 7.56651 27.6933C7.56651 25.4191 8.64933 22.699 10.3923 20.5945C12.2945 18.2978 14.6412 17.0329 16.9999 17.0329C19.3587 17.0329 21.7053 18.2978 23.6075 20.5945C25.3506 22.699 26.4333 25.4191 26.4333 27.6933C26.4335 28.7495 26.0525 29.0663 25.9272 29.1704Z" fill="white" />
                        <path d="M25.3758 4.32617C24.5388 3.09215 23.3403 2.38452 22.0876 2.38452C20.8348 2.38452 19.6363 3.09228 18.7993 4.32617C18.0305 5.45979 17.607 6.94849 17.607 8.51807C17.607 10.0876 18.0304 11.5763 18.7993 12.71C19.6363 13.9439 20.8348 14.6517 22.0876 14.6517C23.3404 14.6517 24.5388 13.9439 25.3758 12.71C26.1447 11.5763 26.5681 10.0876 26.5681 8.51807C26.5681 6.94849 26.1447 5.45973 25.3758 4.32617ZM23.7271 11.5917C23.4567 11.9905 22.884 12.6596 22.0876 12.6596C21.2912 12.6596 20.7185 11.9906 20.448 11.5917C19.9085 10.7963 19.5991 9.67599 19.5991 8.51807C19.5991 7.36008 19.9086 6.2398 20.448 5.44439C20.7185 5.04562 21.2912 4.37658 22.0876 4.37658C22.884 4.37658 23.4567 5.04555 23.7271 5.44439C24.2666 6.2398 24.576 7.36014 24.576 8.51807C24.5759 9.67599 24.2666 10.7963 23.7271 11.5917Z" fill="white" />
                        <path d="M15.2007 4.326C14.3637 3.09197 13.1653 2.38428 11.9125 2.38428C10.6596 2.38428 9.46114 3.09203 8.62422 4.326C7.85537 5.45962 7.4319 6.94831 7.4319 8.51789C7.4319 10.0875 7.85531 11.5762 8.62422 12.7098C9.46121 13.9438 10.6596 14.6516 11.9125 14.6516C13.1653 14.6516 14.3637 13.9438 15.2007 12.7098C15.9696 11.5762 16.393 10.0875 16.393 8.51789C16.393 6.94831 15.9696 5.45955 15.2007 4.326ZM13.5519 11.5916C13.2814 11.9904 12.7087 12.6594 11.9124 12.6594C11.116 12.6594 10.5433 11.9904 10.2728 11.5916C9.73334 10.7962 9.42395 9.67588 9.42395 8.51796C9.42395 7.35996 9.73341 6.23969 10.2728 5.44428C10.5433 5.04551 11.116 4.37646 11.9124 4.37646C12.7088 4.37646 13.2814 5.04544 13.5519 5.44428C14.0914 6.23969 14.4008 7.36003 14.4008 8.51796C14.4008 9.67588 14.0914 10.7962 13.5519 11.5916Z" fill="white" />
                        <path d="M33.802 13.9541C33.4646 12.8063 32.7414 11.9724 31.7657 11.6059C30.9805 11.3109 30.0942 11.3609 29.2699 11.7467C28.1341 12.2782 27.2056 13.3758 26.7229 14.7579C26.3284 15.8873 26.2791 17.0811 26.5844 18.1195C26.9218 19.2673 27.645 20.1013 28.6208 20.4678C28.9585 20.5946 29.3148 20.6576 29.6768 20.6576C30.1567 20.6576 30.6468 20.5468 31.1166 20.3269C32.2525 19.7954 33.1809 18.6979 33.6637 17.3158V17.3157C34.0581 16.1864 34.1074 14.9925 33.802 13.9541ZM31.7829 16.6588C31.4804 17.5248 30.9156 18.2215 30.2722 18.5226C30.0356 18.6332 29.6787 18.737 29.3213 18.6028C28.4588 18.2788 28.1233 16.7891 28.6034 15.4149C28.906 14.5489 29.4708 13.8521 30.1142 13.551C30.2711 13.4776 30.4808 13.4073 30.7084 13.4073C30.8242 13.4073 30.9447 13.4255 31.0651 13.4707C31.9276 13.7947 32.2631 15.2845 31.7829 16.6588Z" fill="white" />
                        <path d="M7.27726 14.7578C6.79442 13.3757 5.86599 12.2782 4.73018 11.7467C3.90588 11.3609 3.01949 11.311 2.23437 11.6058C1.25859 11.9724 0.535364 12.8064 0.197954 13.9541C-0.107316 14.9925 -0.058109 16.1863 0.336411 17.3157V17.3158C0.819317 18.6979 1.74768 19.7954 2.88349 20.3269C3.35338 20.5468 3.84339 20.6576 4.32331 20.6576C4.68536 20.6576 5.04169 20.5945 5.3793 20.4677C6.35521 20.1012 7.07837 19.2672 7.41578 18.1195C7.72092 17.0811 7.67171 15.8873 7.27726 14.7578ZM4.67872 18.6028C4.32138 18.7371 3.96438 18.6333 3.72784 18.5226C3.08443 18.2215 2.51958 17.5248 2.2171 16.6588V16.6589C1.73705 15.2846 2.07247 13.7949 2.93495 13.4708C3.29222 13.3366 3.64929 13.4404 3.88589 13.5511C4.52937 13.8522 5.09415 14.5489 5.39663 15.4149C5.87668 16.7892 5.5412 18.2788 4.67872 18.6028Z" fill="white" />
                    </svg>
                </div>
                <div className="text">
                    Chcem finančne prispieť celej nadácii
                </div>
            </FormOption>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentOption: state.currentOption,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateOption: (data) => dispatch({ type: actionTypes.UPDATE_OPTION, payload: data }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FormOptions);
