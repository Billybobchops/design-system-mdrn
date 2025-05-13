type EnrollmentStatus = 'Not Enrolled' | 'Partially Enrolled' | 'Enrolled';
interface FeatureStatusProps {
    autoPayStatus: EnrollmentStatus;
    paperlessStatus: EnrollmentStatus;
    payByTextStatus: EnrollmentStatus;
    autoPayLink: string;
    paperlessLink: string;
    payByTextLink: string;
}
declare const FeatureStatus: React.FC<FeatureStatusProps>;
export default FeatureStatus;
