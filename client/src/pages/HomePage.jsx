import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Developer</h2>
          <p>
            Hi! I'm Yusuf Karakaya, a full-stack developer from Los Angeles, CA.
            I'm passionate about building high-quality software that solves
            real-world problems. I have experience with a variety of programming
            languages and technologies, including Python, JavaScript, React, and
            Node.js. I'm also proficient in a variety of software development
            tools and frameworks. I'm always looking for new challenges and
            opportunities to learn and grow. I'm also a team player and I'm
            always willing to help others. I'm confident that I can make a
            significant contribution to your team. If you're looking for a
            talented and experienced full-stack developer, please feel free to
            contact me. I'd love to chat about your project and see how I can
            help.
          </p>
        </section>
        <section>
          <ul className='icon-main'>
            <li className='icon-items'>
              <Link to='https://www.linkedin.com/in/ykarakaya/' target='_blank'>
                <ion-icon size='large' name='logo-linkedin'></ion-icon>
              </Link>
            </li>
            <li className='icon-items'>
              <Link to='https://github.com/yusufkarakaya' target='_blank'>
                <ion-icon size='large' name='logo-github'></ion-icon>
              </Link>
            </li>
            <li className='icon-items'>
              <Link
                id='emailMe'
                target='_blank'
                to='mailto:yusufkarakaya92@gmail.com'
              >
                Email Me!
              </Link>
            </li>
          </ul>
        </section>
        <hr></hr>
        <section className='projects'>
          <h3>Projects</h3>
          <ul>
            <li>
              <Link target='_blank' to='https://github.com/yusufkarakaya/blog'>
                MERN Stack - Blog/Personal
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
