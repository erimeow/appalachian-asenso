import { useNavigate } from 'react-router-dom';
import './Experiences.css';
import Section from './Section';
import Card from './Card';
import Button from './Button';

function Experiences() {
  const navigate = useNavigate();

  const experiencesData = [
    {
      id: 'mini-golf',
      icon: '⛳',
      title: 'Glowing Mini Golf',
      description: 'Step onto a blacklight course filled with vibrant neon obstacles and futuristic challenges.',
      link: '/mini-golf'
    },
    {
      id: 'laser-tag',
      icon: '🎯',
      title: 'Action Laser Tag',
      description: 'Enter a high-energy arena featuring state-of-the-art laser tag tech and heart-pounding combat.',
      link: '/laser-tag'
    },
    {
      id: 'parties',
      icon: '🥳',
      title: 'Birthday Parties',
      description: 'Host an unforgettable glow party package with food, games, and private celebration space.',
      link: '/parties' // <--- NAVIGATES TO /parties NOW
    },
    {
      id: 'private-groups',
      icon: '👥',
      title: 'Private Groups',
      description: 'Rent the arena for corporate team building, school events, or private group competitions.',
      link: '/private-groups' // <--- NAVIGATES TO /private-groups NOW
    }
  ];

  return (
    <Section id="experiences" subtitle="ALL UNDER ONE ROOF" title="OUR EXPERIENCES" glass={true}>
      <div className="experiences-grid">
        {experiencesData.map((exp) => (
          <Card 
            key={exp.id} 
            icon={exp.icon} 
            title={exp.title} 
            description={exp.description}
          >
            <Button variant="secondary" onClick={() => navigate(exp.link)}>
              EXPLORE
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Experiences;