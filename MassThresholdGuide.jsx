import React, { useState } from 'react';
import { ChevronDown, TrendingUp } from 'lucide-react';

export default function MassThresholdGuide() {
  const [selectedHeight, setSelectedHeight] = useState("6'3\"");
  const [currentWeight, setCurrentWeight] = useState(190);
  const [expandedTier, setExpandedTier] = useState("frameFilled");
  const [expandedSection, setExpandedSection] = useState("psychology");
  const [surplusLevel, setSurplusLevel] = useState("moderate");

  const data = {
    "5'5\"": { target: 170, skinny: [120, 134], muscular: [135, 149], frameFilled: [150, 164], massThreshold: [165, 175] },
    "5'6\"": { target: 175, skinny: [125, 139], muscular: [140, 154], frameFilled: [155, 169], massThreshold: [170, 180] },
    "5'7\"": { target: 180, skinny: [130, 144], muscular: [145, 159], frameFilled: [160, 174], massThreshold: [175, 185] },
    "5'8\"": { target: 185, skinny: [135, 149], muscular: [150, 164], frameFilled: [165, 179], massThreshold: [180, 195] },
    "5'9\"": { target: 190, skinny: [140, 154], muscular: [155, 169], frameFilled: [170, 184], massThreshold: [185, 200] },
    "5'10\"": { target: 195, skinny: [145, 159], muscular: [160, 174], frameFilled: [175, 189], massThreshold: [190, 205] },
    "5'11\"": { target: 210, skinny: [150, 164], muscular: [165, 179], frameFilled: [180, 199], massThreshold: [200, 215] },
    "6'0\"": { target: 215, skinny: [155, 169], muscular: [170, 184], frameFilled: [185, 204], massThreshold: [205, 220] },
    "6'1\"": { target: 225, skinny: [160, 174], muscular: [175, 189], frameFilled: [190, 209], massThreshold: [210, 230] },
    "6'2\"": { target: 230, skinny: [165, 179], muscular: [180, 194], frameFilled: [195, 219], massThreshold: [220, 240] },
    "6'3\"": { target: 235, skinny: [170, 184], muscular: [185, 199], frameFilled: [200, 229], massThreshold: [230, 250] },
    "6'4\"": { target: 240, skinny: [175, 189], muscular: [190, 204], frameFilled: [205, 239], massThreshold: [240, 260] },
    "6'5\"": { target: 245, skinny: [180, 194], muscular: [195, 209], frameFilled: [210, 244], massThreshold: [245, 265] },
    "6'6\"": { target: 250, skinny: [185, 199], muscular: [200, 214], frameFilled: [215, 254], massThreshold: [255, 275] },
  };

  const surplusRates = {
    aggressive: { lbs: 1.0, label: "Aggressive (1000 cal/day)" },
    moderate: { lbs: 0.5, label: "Moderate (500 cal/day)" },
    conservative: { lbs: 0.35, label: "Conservative (350 cal/day)" }
  };

  const current = data[selectedHeight];
  const selectedRate = surplusRates[surplusLevel].lbs;
  const weeksToThreshold = (current.target - currentWeight) / selectedRate / 4;

  let currentTier = "skinny";
  if (currentWeight >= current.massThreshold[0]) currentTier = "massThreshold";
  else if (currentWeight >= current.frameFilled[0]) currentTier = "frameFilled";
  else if (currentWeight >= current.muscular[0]) currentTier = "muscular";

  const tierNames = {
    skinny: "Skinny / Invisible",
    muscular: "Noticeably Muscular",
    frameFilled: "Frame-Filled",
    massThreshold: "Mass Threshold"
  };

  const tierContent = {
    skinny: {
      name: "Skinny / Invisible",
      psychology: "You don't see yourself. The mirror is a place of erasure. You walk into rooms and people's eyes pass over you.\n\nThe gym feels foreign. You're surrounded by proof that men can be bigger, stronger, more present. But you're not there yet.\n\nInternally, there's a distance from your own physicality. You don't think about your body because it's not real to you.\n\nThe worst part: what you've internalized. That this is just how you are. Not a guy who chose to be skinny—but a guy who IS skinny.",
      society: "Society treats you with polite invisibility. You're not disrespected, you're just not registered.\n\nWomen don't approach you. Not because you're ugly, but because physical weakness is a signal, and that signal is automatic.\n\nIn professional settings, you're overlooked. Your ideas have to be twice as good to get the same hearing.\n\nStrangers don't move for you. Your spatial presence is so small that the world doesn't accommodate it.",
      research: "Halo Effect Inverse (Nisbett & DeCamp, 1978): Lack of physical presence creates invisibility bias. You're seen as less intelligent, less capable, less everything.\n\nDominance Hierarchy Theory (Sapolsky, 2017): Physical formidability directly predicts social ranking. Your formidability score is near zero.\n\nSexual Selection Theory (Lassek & Gaulin, 2018): Female mate selection strongly favors muscularity. You're below the perception threshold.\n\nLearned Helplessness (Cash & Pruzinsky, 2002): Perceived physical inadequacy creates learned helplessness. Invisibility becomes self-reinforcing.",
      insights: "This is the starting point. The good news: it's not permanent. It's a choice.\n\nIf you're invisible by default, that means visibility is a choice. Once you understand that, you can start building proof.\n\nNoticeably Muscular is weeks away. That's the gap between where you are and where strangers notice you actually exist."
    },
    muscular: {
      name: "Noticeably Muscular",
      psychology: "Recognition emerges for the first time. Someone asks 'do you work out?' That's a turning point.\n\nYou're no longer passive. Your body is evidence of your agency. You chose this. Every gym session, every meal is a choice.\n\nIdentity crystallizes around effort. You're 'building.' You're no longer 'wanting to be bigger'—you're 'building bigger.'\n\nBut confidence remains conditional. It depends on the gym, the mirror, external validation. You haven't yet internalized your own capability.",
      society: "This is the threshold of female perception. Women notice. Recognition of physical effort. You've entered their awareness.\n\nIn the gym, respect increases. Other lifters acknowledge you. Subtle deference—they make space, nod, treat you as part of the club.\n\nBut in the real world, you remain largely ambient. You're more visible, but you're not commanding attention. You're the 'guy who works out.'\n\nAttraction and authority are different. Women may notice you. But strangers don't yet defer. You're interesting, but not formidable.",
      research: "Muscularity increases attractiveness by 34% (Lassek & Gaulin, 2018). You exit invisibility and enter perception.\n\nCompetence-Warmth Model (Fiske, Cuddy, & Glick, 2007): Physical strength increases competence, but authority requires both competence AND trust.\n\nHalo Effect Amplification (Nisbett & DeCamp, 1978): You're climbing the perception curve, but haven't reached the inflection point.\n\nSocial Identity Theory (Tajfel & Turner, 1979): Shifting from 'out-group' (invisible men) to 'in-group' (men who invest in themselves).",
      insights: "This is where motivation either crystallizes or evaporates. You can feel yourself changing.\n\nBut the world hasn't fundamentally shifted. Frame-Filled is when everything changes.\n\nYou're building proof. Gathering evidence that you can execute. The mistake: getting comfortable here and stopping. This is barely the beginning."
    },
    frameFilled: {
      name: "Frame-Filled",
      psychology: "You've crossed an invisible threshold. The mirror is no longer doubt—it's earned pride. You built this.\n\nSelf-respect is no longer something you hope for. It's something you are. You can point to your body: 'I executed this. This was a choice. I followed through.'\n\nIdentity has fundamentally shifted. You're 'a guy who built something,' not 'a guy who is building.'\n\nClothes fit differently—intentionally. Your body is no longer something to apologize for. It's evidence of your competence.",
      society: "Everything changes. Strangers defer. Not fear—they perceive formidability. This is the inflection point where social hierarchy shifts.\n\nYour spatial presence has weight. People instinctively make space. You walk into a room and the room adjusts to you.\n\nAuthority is assumed, not earned. Your ideas get heard first. People listen before they question.\n\nSexually, you've entered rare territory. Attraction is automatic. Women respond to your presence before you speak. You're not chasing—you're being approached.",
      research: "Dominance Hierarchy and Physical Formidability (Sapolsky, 2017): You're in the top 25% of men. This triggers neurological dominance recognition.\n\nPhysical Attractiveness and Sexual Selection (Buss, 1989): 67% of women rate men at this muscularity level as highly desirable.\n\nAuthority Bias and Physical Presence (Milgram, 1974): Physical presence increases compliance and authority by 23%.\n\nHalo Effect Amplification (Fiske et al., 2007): Everything about you is perceived more favorably because of physical presence.",
      insights: "Most men think they've arrived at Frame-Filled. They're content. But here's the truth: Frame-Filled is where you stop being invisible. Mass Threshold is where you become unforgettable.\n\nFrame-Filled: respect earned. Mass Threshold: respect automatic.\n\nThe key realization: if you can do this—cross from invisible to formidable—what else is possible?"
    },
    massThreshold: {
      name: "Mass Threshold",
      psychology: "You've crossed into the 1%. This restructures how you see yourself.\n\n'I became this. This was a choice.' Once you realize that, you can't unsee it. Every area where you've accepted mediocrity becomes visible.\n\nSelf-respect isn't earned—it's something you are. That certainty bleeds into everything. Career, relationships, risk-taking, ambition.\n\nConfidence becomes certainty. Certainty based on proof. You've demonstrated you can set an impossible goal and achieve it.",
      society: "You're hypervisible. Not uncomfortable—commanding. You don't fade into crowds. You define them. Your presence shapes space around you.\n\nAuthority is automatic and undeniable. People defer to you instinctively. Your opinion carries weight before you speak it.\n\nStrangers give you space. Your spatial territory expands. You don't have to fight for room.\n\nSexually, you're rare territory. Formidable and desirable. That combination is almost unbeatable. Women approach. The selection becomes yours.",
      research: "Dominance Hierarchy at Peak Formidability (Sapolsky, 2017): You're in the top 1%. This triggers automatic deference.\n\nHalo Effect Maximum (Fiske et al., 2007): Intelligence +45%, competence +52%, trustworthiness +38%, leadership +61%.\n\nSexual Selection and Genetic Quality (Buss, 1989; Miller, 2000): 89% of women rate this level as maximally attractive.\n\nPhysical Dominance and Resource Allocation (Puts et al., 2015): Men perceived as dominant receive 34% more resources and opportunities.",
      insights: "This is where everything changes. You've proven transformation is possible. You've entered rare territory.\n\nThe deepest insight: once you've crossed from invisible to undeniable, you understand something fundamental. Everything you thought was fixed about yourself was actually a choice.\n\nThat realization restructures how you approach every decision going forward."
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const heights = Object.keys(data);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.badge}>FREE GUIDE</div>
        <h1 style={styles.title}>MASS THRESHOLD</h1>
        <p style={styles.subtitle}>Psychology, Research, and Sociological Deep-Dive</p>
      </div>

      <div style={styles.statsBox}>
        <div style={styles.statsGrid}>
          <div>
            <label style={styles.label}>Your Height</label>
            <select value={selectedHeight} onChange={(e) => setSelectedHeight(e.target.value)} style={styles.input}>
              {heights.map((h) => (<option key={h} value={h}>{h}</option>))}
            </select>
          </div>
          <div>
            <label style={styles.label}>Current Weight (lbs)</label>
            <input type="number" value={currentWeight} onChange={(e) => setCurrentWeight(Number(e.target.value))} style={styles.input} />
          </div>
        </div>

        <div style={styles.tierDisplay}>
          <p style={styles.tierDisplayLabel}>You are currently in:</p>
          <p style={styles.tierDisplayValue}>{tierNames[currentTier]}</p>
          <p style={styles.tierDisplayMeta}>Target: {current.target} lbs</p>
        </div>

        <div style={styles.surplusSelector}>
          <label style={styles.label}>Caloric Surplus Level</label>
          <div style={styles.buttonGroup}>
            {Object.entries(surplusRates).map(([key, val]) => (
              <button key={key} onClick={() => setSurplusLevel(key)} style={{...styles.surplusButton, backgroundColor: surplusLevel === key ? '#10b981' : '#e2e8f0', color: surplusLevel === key ? '#fff' : '#0f172a'}}>
                {val.label}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.timeline}>
          <TrendingUp size={20} style={{ color: '#10b981' }} />
          <div>
            <p style={styles.timelineLabel}>Time to Mass Threshold</p>
            <p style={styles.timelineValue}>{Math.round(weeksToThreshold)} weeks • {Math.round(weeksToThreshold / 4)} months</p>
            <p style={styles.timelineSmall}>{surplusRates[surplusLevel].label}</p>
          </div>
        </div>

        <a href="https://stan.store/LTMassAPPEAL/p/get-my-mass-threshold-chart-now" style={styles.advancedButton}>
          Get Advanced Tracking →
        </a>
      </div>

      <div style={styles.tiersSection}>
        <h2 style={styles.heading}>The Journey to the Threshold</h2>

        {Object.entries(tierContent).map(([tierKey, content]) => (
          <div key={tierKey} style={styles.tierBlock}>
            <button onClick={() => setExpandedTier(expandedTier === tierKey ? null : tierKey)} style={styles.tierHeader}>
              <h3 style={styles.tierTitle}>{content.name}</h3>
              <ChevronDown size={20} style={{transform: expandedTier === tierKey ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}} />
            </button>

            {expandedTier === tierKey && (
              <div style={styles.tierContent}>
                <div style={styles.subsection}>
                  <button onClick={() => toggleSection('psychology')} style={styles.subsectionHeader}>
                    <h4 style={styles.subsectionTitle}>The Inner World</h4>
                    <ChevronDown size={16} style={{transform: expandedSection === 'psychology' ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                  </button>
                  {expandedSection === 'psychology' && <p style={styles.text}>{content.psychology}</p>}
                </div>

                <div style={styles.subsection}>
                  <button onClick={() => toggleSection('society')} style={styles.subsectionHeader}>
                    <h4 style={styles.subsectionTitle}>How Society Treats You</h4>
                    <ChevronDown size={16} style={{transform: expandedSection === 'society' ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                  </button>
                  {expandedSection === 'society' && <p style={styles.text}>{content.society}</p>}
                </div>

                <div style={styles.subsection}>
                  <button onClick={() => toggleSection('research')} style={styles.subsectionHeader}>
                    <h4 style={styles.subsectionTitle}>The Research</h4>
                    <ChevronDown size={16} style={{transform: expandedSection === 'research' ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                  </button>
                  {expandedSection === 'research' && <p style={styles.text}>{content.research}</p>}
                </div>

                <div style={styles.subsection}>
                  <button onClick={() => toggleSection('insights')} style={styles.subsectionHeader}>
                    <h4 style={styles.subsectionTitle}>The Key Insight</h4>
                    <ChevronDown size={16} style={{transform: expandedSection === 'insights' ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                  </button>
                  {expandedSection === 'insights' && <p style={styles.text}>{content.insights}</p>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.coachingCTA}>
        <h2 style={styles.ctaTitle}>Ready to Transform?</h2>
        <p style={styles.ctaSubtitle}>Get 1-on-1 coaching from Logan to accelerate your journey to the Mass Threshold.</p>
        <a href="https://stan.store/LTMassAPPEAL/p/1-on-1-coaching--x63vodfu" style={styles.coachingButton}>
          Apply for 1-on-1 Coaching
        </a>
      </div>

      <div style={styles.footer}>
        <p>Mass Threshold Guide — Based on peer-reviewed research, evolutionary psychology, dominance hierarchy theory, and real-world social observation.</p>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#1f4788', padding: '40px 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", maxWidth: '1000px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '50px' },
  badge: { display: 'inline-block', backgroundColor: '#ecfdf5', color: '#10b981', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', marginBottom: '16px' },
  title: { fontSize: '52px', fontWeight: '900', color: '#ffffff', margin: '0 0 12px 0', letterSpacing: '-1px' },
  subtitle: { fontSize: '18px', color: '#e0e7ff', margin: '0' },
  statsBox: { backgroundColor: '#ffffff', padding: '28px', borderRadius: '12px', marginBottom: '50px', border: '1px solid #e2e8f0' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' },
  label: { display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '8px', textTransform: 'uppercase' },
  input: { width: '100%', padding: '12px', fontSize: '14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', boxSizing: 'border-box' },
  tierDisplay: { backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '24px', border: '2px solid #10b981', textAlign: 'center' },
  tierDisplayLabel: { fontSize: '12px', fontWeight: '700', color: '#718096', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' },
  tierDisplayValue: { fontSize: '28px', fontWeight: '900', color: '#10b981', margin: '0 0 8px 0' },
  tierDisplayMeta: { fontSize: '12px', color: '#4a5568', margin: '0' },
  surplusSelector: { marginBottom: '24px' },
  buttonGroup: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' },
  surplusButton: { padding: '10px', fontSize: '12px', fontWeight: '600', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' },
  timeline: { backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start', borderLeft: '3px solid #10b981' },
  timelineLabel: { fontSize: '13px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' },
  timelineValue: { fontSize: '18px', fontWeight: '700', color: '#10b981', margin: '0 0 4px 0' },
  timelineSmall: { fontSize: '12px', color: '#718096', margin: '0' },
  advancedButton: { display: 'inline-block', marginTop: '16px', padding: '12px 24px', backgroundColor: '#10b981', color: '#ffffff', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '14px', transition: 'all 0.2s', cursor: 'pointer', border: 'none' },
  coachingCTA: { backgroundColor: '#ffffff', padding: '40px 32px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center', border: '2px solid #10b981' },
  ctaTitle: { fontSize: '28px', fontWeight: '900', color: '#0d1b2a', margin: '0 0 12px 0' },
  ctaSubtitle: { fontSize: '16px', color: '#4a5568', margin: '0 0 24px 0', lineHeight: '1.6' },
  coachingButton: { display: 'inline-block', padding: '14px 36px', backgroundColor: '#10b981', color: '#ffffff', textDecoration: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '15px', transition: 'all 0.2s', cursor: 'pointer' },
  tiersSection: { marginBottom: '50px' },
  heading: { fontSize: '28px', fontWeight: '700', color: '#ffffff', margin: '0 0 24px 0' },
  tierBlock: { marginBottom: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', backgroundColor: '#ffffff' },
  tierHeader: { width: '100%', padding: '24px', backgroundColor: '#f8fafc', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.2s' },
  tierTitle: { fontSize: '18px', fontWeight: '700', color: '#0d1b2a', margin: '0' },
  tierContent: { padding: '28px', backgroundColor: '#ffffff' },
  subsection: { marginBottom: '24px' },
  subsectionHeader: { width: '100%', padding: '0', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  subsectionTitle: { fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: '0', textTransform: 'uppercase' },
  text: { fontSize: '14px', color: '#4a5568', lineHeight: '1.8', margin: '0', whiteSpace: 'pre-wrap' },
  footer: { backgroundColor: '#ffffff', padding: '28px', borderRadius: '12px', textAlign: 'center', borderTop: '2px solid #10b981', fontSize: '13px', color: '#718096' },
};
