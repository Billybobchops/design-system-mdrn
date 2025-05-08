import Badge from '@components/Badge';
import { AutoPay, ChevronRight, Paperless, PayByText } from '@components/Icon';
import { NavLink } from '@modern-js/runtime/router';
import classes from './FeatureStatus.module.scss';

type EnrollmentStatus = 'Not Enrolled' | 'Partially Enrolled' | 'Enrolled';

type EnrollmentType = 'AutoPay' | 'Paperless' | 'Pay By Text';

const getBadgeVariant = (status: EnrollmentStatus) => {
    if (status === 'Not Enrolled') {
        return 'error';
    }
    if (status === 'Partially Enrolled') {
        return 'warning';
    }
    if (status === 'Enrolled') {
        return 'success';
    }
    return 'neutral';
};

interface EnrollmentGridRowProps {
    serviceType: EnrollmentType;
    link: string;
    status: EnrollmentStatus;
}

const EnrollmentGridRow: React.FC<EnrollmentGridRowProps> = ({ serviceType, link, status }) => {
    return (
        <NavLink to={link} className={classes.gridRow}>
            <div className={classes.gridItems}>
                <div className={classes.gridItem}>
                    {serviceType === 'AutoPay' && <AutoPay fill={'var(--theme-a-4)'} />}
                    {serviceType === 'Paperless' && <Paperless fill={'var(--theme-a-4)'} />}
                    {serviceType === 'Pay By Text' && <PayByText fill={'var(--theme-a-4)'} />}
                    <p className={classes.serviceTitle}>{serviceType}</p>
                </div>
                <span className={classes.mobileBadge}>
                    <Badge content={status} hasMargin={false} variant={getBadgeVariant(status)} />
                </span>
            </div>
            <ChevronRight fill={'var(--theme-a-4)'} />
        </NavLink>
    );
};

interface FeatureStatusProps {
    autoPayStatus: EnrollmentStatus;
    paperlessStatus: EnrollmentStatus;
    payByTextStatus: EnrollmentStatus;
    autoPayLink: string;
    paperlessLink: string;
    payByTextLink: string;
}

type Service = {
    link: string;
    serviceType: EnrollmentType;
    status: EnrollmentStatus;
};

type ServicesArr = Service[];

const FeatureStatus: React.FC<FeatureStatusProps> = ({
    autoPayStatus,
    paperlessStatus,
    payByTextStatus,
    autoPayLink,
    paperlessLink,
    payByTextLink,
}) => {
    const services: ServicesArr = [
        { serviceType: 'AutoPay', link: autoPayLink, status: autoPayStatus },
        { serviceType: 'Paperless', link: paperlessLink, status: paperlessStatus },
        { serviceType: 'Pay By Text', link: payByTextLink, status: payByTextStatus },
    ];

    return (
        <div className={classes.grid}>
            {services.map(service => {
                return (
                    <EnrollmentGridRow
                        key={service.serviceType}
                        serviceType={service.serviceType}
                        link={service.link}
                        status={service.status}
                    />
                );
            })}
        </div>
    );
};

export default FeatureStatus;
