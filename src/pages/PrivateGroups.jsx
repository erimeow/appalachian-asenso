import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

function PrivateGroups() {
  const groupTypes = [
    {
      icon: '🏢',
      title: 'Corporate Team Building',
      description: 'Palakasin ang team chemistry sa pamamagitan ng laser tag battles at competitive mini golf tournaments.'
    },
    {
      icon: '🎓',
      title: 'School & Youth Events',
      description: 'Ligtas, masaya, at vibrant venue para sa field trips, youth groups, at graduation parties.'
    },
    {
      icon: '🔒',
      title: 'Full Facility Buyout',
      description: 'I-rent ang buong venue para sa eksklusibong access sa mini golf at laser tag arenas.'
    }
  ];

  return (
    <div>
      <Section id="groups-hero" subtitle="EXCLUSIVE ARENA ACCESS" title="PRIVATE GROUPS & EVENTS">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Plano mo bang mag-organize ng corporate outing o malaking pamilya? I-book ang Appalachian Asenso para sa eksklusibong private event!
          </p>
          <Button variant="primary" onClick={() => alert("Inquiring for Private Event...")}>
            INQUIRE FOR PRIVATE EVENT
          </Button>
        </div>
      </Section>

      <Section id="group-options" subtitle="EVENT TYPES" title="GROUP RENTALS" glass={true}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {groupTypes.map((item, idx) => (
            <Card key={idx} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default PrivateGroups;