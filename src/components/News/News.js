import {
  Icon,
  Container,
  Section,
  Collapsible,
  CollapsibleItem,
  Slider,
  Slide,
  Caption,
} from "react-materialize";
export default function News() {
  return (
    <div className="about">
      <h1 className="center">News</h1>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="What's New?"
          icon={<Icon>{"new_releases"}</Icon>}
          node="div"
        >
          <Caption placement="left">
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/Exorcist-Michael-Myers-Halloween.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5" />
            <h3 style={{ textAlign: "center" }}>
              Halloween Ends Director Offers Promising Update On Exorcist Reboot
            </h3>
            <h5>
              David Gordon Green offers a promising update on The Exorcist
              reboot. After seven Halloween sequels and a reboot by Rob Zombie,
              Green came along and revived the long-running slasher franchise to
              rave reviews with 2018's Halloween, which acted as a direct sequel
              to John Carpenter's original film from 1978. The director returned
              for last year's sequel, Halloween Kills, and the upcoming
              threequel, Halloween Ends, which is expected to conclude the saga
              of Laurie Strode (Jamie Lee Curtis) and Michael Myers. Halloween
              Ends releases simultaneously in theaters and Peacock on October
              14, and Green already has another horror reboot trilogy in the
              works, The Exorcist. Universal paid a reported $400 million for
              the trilogy, which will be produced by Blumhouse and see Ellen
              Burstyn reprise her role from the original 1973 film as Chris
              MacNeil, the mother who hires a pair of Catholic priests to
              conduct an exorcism on her demonically-possessed daughter.
              Hamilton's Leslie Odom Jr. and The Handmaid's Tale's Ann Dowd also
              star, with the demon character Pazuzu factoring into the plot as
              well.
            </h5>
          </Caption>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}
