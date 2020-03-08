import React, { useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import PartnerShowcase from "components/PartnerShowcase"
import CommunityLeaderCard from "components/CommunityLeaderCard"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import deco_1 from "../images/web-home-1.svg"
import UpcomingEventCard from "../components/UpcomingEventCard"
import WorkplaceLogo from "images/workplace.svg"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;
    max-width: 650px;
    color: #707070;
    line-height: 2;
    font-size: 3.3em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const Deco_1 = styled("img")`
  color: black;
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -100;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    top: 16vh;
    width: 200px;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: none;
  }
`

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const SectionTitle = styled("h3")`
  margin: auto;
  padding: 2em;
`
const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const GoalDescription = styled("p")`
  margin: auto;
  max-width: 80%;
  font-size: 1.3em;
`
const PartnerContainer = styled("div")`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`

const CommunityLeadContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 10em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  row-gap: 10em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const UpcomingEventContainer = styled("div")`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;

  padding-bottom: 1em;

  width: 100%;
`

const InviteWorkplace = styled("div")`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  font-family: HK Grotesk Light;
  font-size: 1.5em;
  padding-top: 1em;

  img {
    padding-left: 0.5em;
    height: 1.5em;
    border-bottom: 3px solid transparent;
    &:after {
      content: "";
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const RenderBody = ({ home, meta, lead, event, partner }) => (
  <>
    <Helmet
      title={meta.title}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Hero>
      <Deco_1 src={deco_1} alt="hello" />
      <>{RichText.render(home.hero_title)}</>

      <InviteWorkplace>
        Join us on{" "}
        <a href="https://www.facebook.com/workplace">
          <img src={WorkplaceLogo} />
        </a>
        <br />
      </InviteWorkplace>
    </Hero>

    <Section>
      <h3>Our Goal</h3>
      <GoalDescription>
        The goal is simple. We want to build the foundation and unify the tech
        community in Sarawak. We truly believe that Sarawak has a massive
        economic potential that is simply waiting to be unlocked — if we have
        the right talent pool and ideas. To do that, we need to start sharing
        what we know to more people.
        <br />
        <br />
        <b>DEV200</b> is the answer we have come up with. It is where people
        teach their technical expertise to aspiring learners. It is the sharing
        of ideas between a mentor and mentee. It is the collaborative effort
        between people to solve real world problems. At the heart of it all, it
        is a community.
      </GoalDescription>

      {/* <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrSw7RHFP3OaX48d?backgroundColor=green"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="2542"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe> */}
    </Section>

    <Section>
      <SectionTitle>Beloved Partners</SectionTitle>
      <PartnerContainer>
        {partner &&
          Object.keys(partner).map((object, index) => {
            return <PartnerShowcase key={index} image={partner[object]} />
          })}
      </PartnerContainer>
    </Section>
    <Section>
      <SectionTitle>Community Leaders</SectionTitle>
      <CommunityLeadContainer>
        {lead.map((leader, i) => (
          <CommunityLeaderCard
            key={i}
            image={leader.node.image}
            name={leader.node.name}
            organisation={leader.node.organisation}
            linkedin={leader.node.linkedin}
            github={leader.node.github}
          />
        ))}
      </CommunityLeadContainer>
    </Section>
    <Section>
      <SectionTitle>Upcoming Events</SectionTitle>
      <UpcomingEventContainer>
        {event.map((activity, i) => (
          <UpcomingEventCard
            key={i}
            title={activity.node.title}
            category={activity.node.category}
            image={activity.node.image}
            venue={activity.node.venue}
            start_datetime={activity.node.start_datetime}
            end_datetime={activity.node.end_datetime}
            link={activity.node.registration_link}
          />
        ))}
      </UpcomingEventContainer>
    </Section>
    <Section>
      <SectionTitle>How can you fit in?</SectionTitle>
      <InviteWorkplace>
        Well, for a start, why not join us on{" "}
        <a href="https://www.facebook.com/workplace">
          <img src={WorkplaceLogo} />
        </a>
        <br />
      </InviteWorkplace>
      <InviteWorkplace>and we will take it from there.</InviteWorkplace>
    </Section>

    {/* <Section>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.node.project_category}
          title={project.node.project_title}
          description={project.node.project_preview_description}
          thumbnail={project.node.project_preview_thumbnail}
          uid={project.node._meta.uid}
        />
      ))}
      <WorkAction to={"/work"}>
        See more work <span>&#8594;</span>
      </WorkAction>
    </Section> */}
    {/* <Section>
            {RichText.render(home.about_title)}
            <About
                bio={home.about_bio}
                socialLinks={home.about_links}
            />
        </Section> */}
  </>
)

const filterExpiredEvent = events => {
  let sortedEvents = []
  let pastEvents = []

  events.forEach(activity => {
    let eventDate = new Date(activity.node.start_datetime)
    console.log(typeof eventDate)
    if (eventDate > new Date()) {
      sortedEvents.push(activity)
    } else {
      pastEvents.push(activity)
    }
  })
  return sortedEvents.concat(pastEvents)
}

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const meta = data.site.siteMetadata
  const lead = data.prismic.allCommunityleaders.edges
  const event = filterExpiredEvent(data.prismic.allEventss.edges)
  const partner = doc.node.beloved_partner_section[0]

  if (!doc) return null

  return (
    <Layout>
      <RenderBody
        home={doc.node}
        meta={meta}
        lead={lead}
        event={event}
        partner={partner}
      />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  event: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  lead: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            beloved_partner_section {
              partner_1
              partner_2
            }
          }
        }
      }
      allEventss(sortBy: start_datetime_ASC) {
        edges {
          node {
            title
            image
            category
            venue
            start_datetime
            end_datetime
            registration_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
      allCommunityleaders {
        edges {
          node {
            name
            image
            organisation
            github {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            linkedin {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
