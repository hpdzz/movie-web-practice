import {
  Icon,
  Collapsible,
  CollapsibleItem,
  Slider,
  Slide,
  Caption,
} from "react-materialize";
export default function About() {
  return (
    <div className="about">
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="Who are we?"
          icon={<Icon>groups</Icon>}
          node="div"
        >
          Our website is a home to the shows and films that everyone is talking
          about, from groundbreaking series and documentaries to the biggest
          blockbuster movies ever made.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Our Mission"
          icon={<Icon>flag</Icon>}
          node="div"
        >
          We are committed to providing the best entertainment experience to our
          customers. We are passionate about the movies and shows we offer and
          we are dedicated to providing a superior customer experience.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Our Major Film Studios Partners"
          icon={<Icon>apartment</Icon>}
          node="div"
        >
          <Slider>
            <Slide
              image={
                <img
                  className="opa"
                  alt=""
                  src="https://i.ytimg.com/vi/hgs07ztRvFE/maxresdefault.jpg"
                />
              }
            >
              <Caption placement="left">
                <h3>20th Century Studios</h3>
                <h5 className="light grey-text text-lighten-3">
                  20th Century Studios is a film studio that is a subsidiary of
                  The Walt Disney Studios, a division of The Walt Disney
                  Company.
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  className="opa"
                  alt=""
                  src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_dikkrqn0/def_height/2700/def_width/2700/version/100012/type/1"
                />
              }
            >
              <Caption placement="left">
                <h3>Paramount Pictures</h3>
                <h5 className="light grey-text text-lighten-3">
                  Paramount Pictures Corporation is an American film studio
                  based in Hollywood, California.
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  className="opa"
                  alt=""
                  src="https://www.universalpictures.com/assets/img/universal-share.jpg"
                />
              }
            >
              <Caption placement="left">
                <h3>Universal Pictures</h3>
                <h5 className="light grey-text text-lighten-3">
                  Universal Pictures is an American film studio owned by Comcast
                  through the Universal Filmed Entertainment Group division of
                  its wholly owned subsidiary NBCUniversal.
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  alt=""
                  className="opa"
                  src="https://www.whats-on-netflix.com/wp-content/uploads/2018/12/Warner-Brothers-Netflix-Content.jpg"
                />
              }
            >
              <Caption placement="left">
                <h3>Warner Bros. Pictures</h3>
                <h5 className="light grey-text text-lighten-3">
                  Warner Bros. Pictures is an American film production and
                  distribution studio, a division of Warner Bros. Entertainment.
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}
