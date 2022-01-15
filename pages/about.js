import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Chip from '@mui/material/Chip'
import Slider from 'react-slick'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import Link from 'next/link'

import Image from '../components/Image'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />

      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold leading-8 tracking-tight mb-5">
            Work experience & Education
          </h3>
          <p>My previous jobs and my qualifications.</p>
        </div>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2019 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Engineer / Fullstack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Arcanys Partner with Alaya</h4>
            <p>
              Take ownership of the frontend development in the application as well as participating
              in back-end/api development. Spearheaded our design system, test driven development,
              monolith migration to multi-packaged repository. Actively looks for solutions to
              improve overall development experience and making the codebase healthy.
            </p>
            <div className="my-2">
              <Chip label="ReactJS" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Typescript" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="NodeJS" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Express" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="MongoDB" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Webpack" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Lerna" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Storybook" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Jest" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip
                label="React Testing Library"
                size="small"
                variant="outlined"
                className="mr-1 mb-1"
              />
              <Chip label="JSS" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip
                label="Styled Components"
                size="small"
                variant="outlined"
                className="mr-1 mb-1"
              />
              <Chip label="TailwindCSS" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2018 - April 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Arcanys Partner with RateMyAgent</h4>
            <p>
              Focus on the application structure for single page applications as well multi‐paged
              applications. Participate in design planning and decisions to deliver the best user
              experience.
            </p>
            <div className="my-2">
              <Chip label="AngularJS" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Angular2+" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Jasmine" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Chai" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2016 - January 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Kreloses</h4>
            <p>
              Implement a Multi‐Page Application (MPA) structure in the frontend. Write unit tests,
              follow code conventions, participants to code reviews, take ownership much of the
              front end of Kreloses and extension products. Employed and drive modern development
              practices such as test driven development, autonomous integration, and automatic
              release and build.
            </p>
            <div className="my-2">
              <Chip label="ReactJS" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Typescript" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Redux" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="React Redux" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Mocha" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Chai" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2016 - September 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">PHP Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Koodi Systems</h4>
            <p>
              Responsible for developing and maintaining one of the top restaurant reservation in
              Denmark. Responsible for backend and frontend development using Laravel 4 and PHP
              technologies.
            </p>
            <div className="my-2">
              <Chip label="PHP" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Laravel" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="JQuery" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="AngularJS" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2014 - December 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">PHP/Wordpress Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">iBoostme</h4>
            <p>
              Responsible for developing Wordpress and PHP driven websites and creating great user
              interfaces and widgets. Responsible for maintaining existing Wordpress sites.
            </p>
            <div className="my-2">
              <Chip label="PHP" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Laravel" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Wordpress" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Javascript" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
          {/* Php Drafting Zone */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2014 - December 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">PHP Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">The Drafting Zones Services</h4>
            <p>
              Create competitive e-learning web application using PHP Laravel, Javascript, CSS,
              HTML. Analyze the processes given by the clients and apply/include it to the system
              requirements. Write code and implement the listed requirements.
            </p>
            <div className="my-2">
              <Chip label="PHP" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="CodeIgniter" size="small" variant="outlined" className="mr-1 mb-1" />
              <Chip label="Javascript" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2008 - April 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Negros Oriental State University</h4>
            <p>
              Team Lead in Multimedia and Information System department at PYLON ‐ a school
              organization that produce yearbook to incoming graduates. Lead a team for 2 years and
              published an interactive yearbook application using Adobe Flash and ActionScript.
            </p>
            <div className="my-2">
              <Chip
                label="ActionScript 3.0"
                size="small"
                variant="outlined"
                className="mr-1 mb-1"
              />
              <Chip label="Adobe Flash" size="small" variant="outlined" className="mr-1 mb-1" />
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold leading-8 tracking-tight mb-5">Side Projects</h3>
          <p>Compilations of my side and personal projects.</p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <Slider {...settings}>
              <div className="slider-item slider-card">
                <Link href="https://balancingacct.com/" passHref>
                  <Image
                    alt="BalancingAcct preview"
                    src="/static/images/balancing-acct.png"
                    className="object-cover object-center lg:h-48 md:h-36 cursor-pointer rounded-md"
                    layout="responsive"
                    width={544}
                    height={306}
                  />
                </Link>
                <h3>
                  <Link href="https://balancingacct.com/">BalancingAcct</Link>
                </h3>
                <p className="mt-3">
                  Elegant and clean informative bookkeeping services for an Australian client.
                </p>
                <p className="mt-3">
                  <Chip className="mr-2" label="NextJS" />
                  <Chip className="mr-2" label="MaterialUI" />
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
