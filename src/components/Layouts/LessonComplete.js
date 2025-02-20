import { useState } from "react";
import MainText from "./MainText";
import Toolbar from "./Toolbar";
import HTMLRender from "./HTMLRender";

const LessonComplete = (props) => {
  const [open] = useState(false);
  const [cilResources] = useState([
    {
      name: "Newsletter",
      description: `<p><a href="https://chaplaincyinnovation.org/newsletter" target="_blank">Sign up for our free newsletter</a>. It comes out every other week and will keep you informed on all things Chaplaincy!</p>`,
      icon: "newsletter.svg",
    },
    {
      name: "Facebook Group",
      description: `<p><a href="https://www.facebook.com/groups/1702775166547424/?source_id=1577711995612104" target="_blank">Join a lively conversation</a> with your peers and spiritual care providers discussing important topics, sharing ideas, asking for and giving support. </p>`,
      icon: "facebook.svg",
    },
    {
      name: "Webinars",
      description: `<p>Our <a href="https://chaplaincyinnovation.org/webinars" target="_blank"><a>webinars</a> cover a wide variety of topics through interviews with subject matter experts. We also record and archive all of our webinars so you never miss out!</p>`,
      icon: "webinar.svg",
    },
    {
      name: "Twitter",
      description: `<p><a href="https://chaplaincyinnovation.org/resources/ebooks" target="_blank">Follow us @ChaplainLab</a> for up-to-the minute news on spiritual views from across the country and around the world. </p>`,
      icon: "twitter.svg",
    },
    {
      name: "eBooks",
      description: `<p>We have a series of helpful, <a href="https://twitter.com/ChaplainLab" target="_blank">free to download eBooks</a>, that cover topics for experienced chaplains or those just considering a career in spiritual care. All are written by subject matter experts with the goal of educating and informing you on critical issues and important topics.</p>`,
      icon: "ereader.svg",
    },
    {
      name: "Musical Events",
      description: `<p>Our ongoing series, <a href="https://chaplaincyinnovation.org/music-for-the-soul" target="_blank">“Music For The Soul,”</a> features an eclectic range of musical talent. These online concerts are a combination of original artists sharing their musical talents and their personal insights on the healing power of music in their journeys.</p>`,
      icon: "quaver.svg",
    },
    {
      name: "COVID-19 Resources",
      description: `<p><a href="https://chaplaincyinnovation.org/2020/05/chaplaincy-coronavirus" target="_blank">Explore resources </a>unique to those in spiritual care.</p>`,
      icon: "mask.svg",
    },
    {
      name: "Lab News & Views ",
      description: `<p><a href="https://chaplaincyinnovation.org/lab-in-the-news-2" target="_blank">Our blog</a> is rich with voices of experts in spiritual care. Check out the diverse perspectives and lively discussion.</p>`,
      icon: "discussion.svg",
    },
    {
      name: "Our Website",
      description: `<p><a href="https://chaplaincyinnovation.org/" target="_blank">Visit our website</a> to learn more about the Chaplaincy Innovation Lab!</p>`,
      icon: "article.svg",
    },
  ]);

  return (
    <div className="layout-page">
    

      {!open && (
        <div>
          <div className="flex-box flex-center">
            <div className="column-lg-10 column-sm-12 column-md-12">
              {props.activeScene.title !== null && (
                <h2>
                  <span className="title">{props.activeScene.title}</span>
                </h2>
              )}
            </div>
          </div>
          <div className="flex-box flex-center">
            {props.activeScene.text &&
              props.activeScene.title !== null && (
                <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
                  {props.activeScene.text.map((text, i) => {
                    return <MainText className={`none`} text={text} key={i} />;
                  })}
                </div>
              )}
            {props.activeScene.text &&
              props.activeScene.title === null && (
                <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-shadow">
                  {props.activeScene.text.map((text, i) => {
                    return <MainText className={`none`} text={text} key={i} />;
                  })}
                </div>
              )}
          </div>
          <div className=" flex-box flex-end">
            <div className="user-feedback-div column-lg-4 column-md-3 column-sm-12">
            <strong>Have feedback to share?</strong>
            <p><a href="https://form.fillout.com/t/p94ivyVVVsus" className="white">Let us know what you think</a> of this case study.</p>
            </div>
          
            </div>
          <div className="flex-box flex-center cil-header">
            <div className="flex-box flex-column column-lg-12 column-sm-12 column-md-12">
              <div className="flex-box flex-center">
                <img
                  src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/typing.png"
                  alt="lesson complete"
                  className="resources-gif"
                />
                <div className="flex-box flex-column column-lg-5 column-sm-12 text-spotlight">
                  <h4>Stay engaged!</h4>
                  <p>
                    Now that you’ve completed this case study, here are a few
                    ways to learn more about the Chaplaincy Innovation Lab! Stay
                    engaged! Stay informed!
                  </p>
                </div>
              </div>

              <div className="flex-box flex-center more-info ">
                {cilResources.map((resource, i) => {
                  return (
                    <div
                      className="cil-resource column-md-6 column-lg-4"
                      key={i}
                    >
                      <img
                        src={`https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/${resource.icon}`}
                        alt={resource.name}
                        className="resource-icon"
                      />
                      <h3 className="resource-title">{resource.name}</h3>
                      <div className="resource-description">
                        {" "}
                        <HTMLRender text={resource.description} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Toolbar activeScene={props.activeScene} updateLayoutNumber={props.updateLayoutNumber} lesson={props.lesson} updateScene={props.updateScene}/>
        </div>
      )}
    </div>
  );
};

export default LessonComplete;
