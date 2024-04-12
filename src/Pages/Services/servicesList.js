import EnvironmentalManagement from "./EnvironmentalManagement";
import FinancialConsulting from "./FinancialConsulting";
import Legal from "./Legal";
import ProjectManagement from "./ProjectManagement";

import { Business, EnergySavingsLeafOutlined, Gavel, AttachMoney, PlaylistAddCheck } from '@mui/icons-material';
import PublicPrivatePartnerships from "./PublicPrivatePartnerships";

export const servicesList = [
    {
        title: 'Legal Advisory and Policy Development',
        slug: 'legal-advisory-and-policy-development',
        desc: 'Our team of seasoned legal practitioners specializes in providing comprehensive legal advisory services tailored to the needs of governments, businesses, and communities.',
        icon: <Gavel />,
        element: <Legal />
    },
    {
        title: 'Financial Consulting and Investment Advisory',
        slug: 'financial-consulting-and-investment-advisory',
        desc: 'Our financial consulting services are designed to empower governments, businesses, and communities to make informed decisions that promote economic growth while safeguarding natural resources.',
        icon: <AttachMoney />,
        element: <FinancialConsulting />
    },
    {
        title: 'Environmental Management and Sustainability Solutions',
        slug: 'environmental-management-and-sustainability-solutions',
        desc: 'At QuantumEx Capital Solutions Ltd, we integrate environmental considerations into sustainability and development decision-making processes. ',
        icon: <EnergySavingsLeafOutlined />,
        element: <EnvironmentalManagement/>
    },
    {
        title: 'Public Private Partnerships (PPPs)',
        slug: 'public-private-partnerships',
        desc: 'We specialize in facilitating partnerships between the public and private sectors to drive infrastructure development and promote sustainable economic growth.',
        icon: <Business />,
        element: <PublicPrivatePartnerships />
    },
    {
        title: 'Project Management',
        slug: 'project-management',
        desc: 'Our project management services are designed to ensure the successful implementation of environmental sustainability initiatives.',
        icon: <PlaylistAddCheck />,
        element: <ProjectManagement />
    },
]