const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p>The spiritual care team was divided into three groups. Each group was tasked with working with colleagues and family members to plan a memorial service for one of the people who died.</p><p>Your group was tasked to plan the service for the perpetrator, Mario Ramirez. You gather the group of chaplains in a meeting room and open the meeting.</p><p>Just as you begin, one of the chaplains says, “I heard from Dr. Hendel that this service is being challenged by senior leaders and members of the hospital community. Do you think we should even hold one?”</p>
<p>How should you respond?</p>`,
      options: [
        { text: `"No, I don’t think we should. He killed two people, and himself. He is the source of violence in this situation, and it feels disrespectful to the victims and their families to remember him in this way.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a very difficult question to answer, but this isn’t the best choice. As a chaplain, it is your responsibility to hold difficult truths. Mario was a husband, father, colleague, and member of the community. While no one supports his actions, you can choose to embrace the healing power of forgiveness by holding a memorial service for Mario.` },
        { text: `"Yes, we were asked to plan the service, and it’s our duty to serve all people, even those who commit acts of violence.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a very difficult question to answer, but this is the best choice. Mario was a husband, father, colleague, and member of the community. While no one supports his actions, you can choose to respond much as defense attorneys respond, with a commitment to the humanity of every individual.` },
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<strong>You say, “Yes, we were asked to plan the service, and it’s our duty to serve all people, even those who commit acts of violence,” you say. “I know this is a really difficult situation, but I don’t think we are condoning violence by holding a memorial service for Mario. He was a member of this community, too. He was suffering.” </strong>

      <p>Another chaplain chimes in, “I agree that it’s clear that Mario was suffering, but it still does not feel right to hold a memorial service for him. I don’t think this is just about the victims’ families and peers - he traumatized the entire hospital community.” Other chaplains begin to nod.</p>
      <p>You hear their concerns about the impacts of this violence on the entire hospital community and begin to look at the notes that Dr. Hendel shared with you, with recommendations from various stakeholders. You read each position to the group.</p>
      <p>Which one would you choose?</p>
      `, 
      options: [
        { text: `Hold a memorial service at the hospital, in a worship space.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `A small group of senior hospital leaders and staff have asked that Mario’s memorial service be held at the hospital in the worship space. They believe that each person who died that day should be remembered. This isn't a bad choice, but there is a better one. Consider another option.` },
        { text: `Hold a memorial service off campus at a nearby church.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `Some senior hospital leaders and staff have asked that the memorial service be held off-site at a nearby church, so that anyone who wants to avoid the service doesn’t have to pass it during their work day. This choice balances the needs of most of the stakeholders by holding a service for Mario, but not bringing that service into the space of the hospital. This choice avoids retraumatizing members of the hospital community, while still holding firm in the hospital’s values of “caring for the people in our community at all stages of life, from beginning to end.”` },
        { text: `Don’t hold a memorial service for Mario at all.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `Several senior hospital leaders and staff are adamantly opposed to holding a memorial service for Mario that’s affiliated with the hospital at all. They don’t want to give him any notoriety for this tragedy. This is not the best choice. Consider another option.` },
        { text: `Hold a memorial service at the hospital, at the site of the shooting. `, conditions: {type: null, command: "NEXT", index: null}, feedback: `A small group of hospital staff have voiced their desire to hold Mario’s memorial service at the site of the shooting, to hold the pain of the violence that all suffered on that day. This is not the best choice. Consider another option.` }
          
      ],
      multipleSelect: false,
      type: "choice", 
  }, 
  "3": {
      question: `<p>The final decision was for the hospital to host all three memorial services. Those for Hugo and Kelly were held on campus. The service for Mario took place off campus, away from the hospital, at a local church. You attended and spoke at his service. </p><p>Dr. Hendel attended the family funerals for Hugo and Kelly as well as the memorial services on campus. She delivered eulogies at both of the on campus memorial services by invitation. Dr. Hendel decided not to attend Mario’s service off campus.</p><p>As she writes, “I decided that going would cross the line, integrity-wise, for me, personally, and that, as CEO, foregoing the service was also best for the whole. Instead, I wrote a brief statement on behalf of the hospital administration expressing condolences to his family and gave it to the chaplain to read at the service. A service that ended up being attended by several hundred people.”</p>`,
      options: [  { text: `How do you feel about the decisions that were made? Would you have chosen differently if you had the chance? Whose voices were most important to honor in this situation?`, conditions: {type: null, command: "NEXT", index: null}, feedback: `` },
      ], 
      multipleSelect: false, 
      type: "open", 
     
  },
  "4": {
    question: `<p>A week after the incident, the hospital stopped to observe a moment of silence. Weeks later, a group of staff came together to plan a physical monument, a memorial, for the campus in honor of those who died. While some people thought such a monument was unhealthy - a visible reminder of what happened - most staff were supportive.</p>
<p>However, there was not consensus around what form the monument should take, or where it should go.</p>
<p>Dr. Hendel delegated responsibility for this effort to a small group including staff from Facilities, Spiritual Care, and Public Safety. Questions about whether there would be an annual memorial service at the monument or elsewhere and how it would be marked were core to these discussions.</p>

<p>Once again, you were part of the group that shaped these decisions.</p><p>You convene with the group to discuss the monument. The Facilities representative opens the meeting by asking where the monument should be placed. The Public Safety representative suggests placing it at the site of the shooting. The Facilities representative agrees, then turns to you and asks you what you think.</p>       <p>How do you respond?</p>`,
options: [{text: `“I’ve heard from hospital staff that the pharmacy is a frightening place for them right now. Why don’t we consider placing the memorial in a more neutral space, like in the garden?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice in this situation. The garden is a great spot for the monument, as it is a calm and intentional space away from the site of the shooting. You assert your expert opinion respectfully by centering the needs of hospital staff in your response.` }, {text: `“I’ve heard from hospital staff that the pharmacy is a frightening place for them right now. Maybe adding a monument there would help with healing?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice in this situation. While this location may facilitate healing, it may also serve as an unnecessary reminder of the violence that occurred, not allowing the team to reclaim the space as a part of the larger healing mission of the hospital.` }, {text: `“Putting the monument at the site of the shooting is insensitive. I’ll handle this work - you can both go back to focusing on your normal work.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the worst choice in this situation. This is a collaborative effort and you were condescending to your peers. Though you disagree with their suggestion, you should communicate your reasoning with respect.` }],
    multipleSelect: false, 
    type: "choice"
},
"5": {
  question: `<p>It was some time before progress was made on a permanent monument, an outdoor garden with a pond and benches located some distance from the crime scene. The names of the victims were not included. Unless they know the history, visitors today would not connect it to the events of April 16, 2009. The monument was dedicated one year after the incidents on April 16, 2010.</p><p>Services of remembrance were held to mark the date in 2011 and 2012 and then there was debate about what to do. Many employees had been hired since the event and had no direct connection to it; some people felt strongly that it was maudlin to continue to mark the anniversary, that the hospital needed to “move on.” </p>

<p>Others still felt an emotional connection and active grief and wanted the opportunity to mark the dates in community.</p> 

<p>Your supervisor, the Director of Spiritual Care, met with Dr. Hendel to discuss plans for the future. You were invited to join the meeting since you were so involved in planning memorial services and the monument.</p><p>You sit down in Dr. Hendel’s office beside your supervisor. She expresses that she’s anxious about the debate that these services are causing amongst the hospital community. She turns to you both and says, “I don’t know, what do you think we should do? Should we just cancel these services?”</p>

<p>How should you respond?</p>

`,
  multipleSelect: false, 
  type: "choice",
  options: [{text: `“Debate is a healthy part of any community. I know it’s hard to hear the dissent, but many staff members still need this service as part of their healing. We should keep hosting the services.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice. Use this moment of debate to listen to the needs of the community and find a different way forward.` }, {text: `“Yes, let’s cancel the services this year. Anyone who wants to remember the day can visit the monument.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice. While some members of the community do not want the services any longer, there are those who do. As a chaplain, you should help those in need make sense of the situation.` }, {text: `“Why don’t we have a smaller service next year? It’s obvious that some in the community still need this, but others find it retraumatizing.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice in this situation. By reducing the size of the event, you can still serve those in need, while reducing harm for those who do not want to attend.` }]
  },
  "6": {
    question: `<h3>A compromise</h3><p>Dr. Hendel liked your idea. The compromise by year four was to have a Day of Peace observed on April 16th. The Director of Spiritual Care sent a flier and notice to all staff, and a harpist played in the lobby from 11 am - 1pm, encompassing the time of the full event. This provided a way for those who wanted to participate to have something, but it was not so large as to create new trauma.</p>`,
    multipleSelect: false, 
    type: "open", 
    options: [
      {text: `What are you feeling about the decisions that were made?`, conditions: {type: null, command: '', index: null}, feedback: ``}
    ],
    end: true
    },
  
}
)
export default partA;