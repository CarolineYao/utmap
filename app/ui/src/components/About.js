import React, { Component } from 'react';
import '../styles/about.css';
class about extends Component {
  render() {
    return (
      <div>
        <h2 id="aboutus-title">About Us</h2>

        <div id = "Intro">
          <h3>  With so many different buildings at U of T and only so few
          combinations of 2 letters, the building abbreviations easily become
          confusing for many students including our team members, and can become
          a source of navigational issues. Some buildings, such as BA for ‘Bahen
          Centre’, are straight-forward to search on Google Maps, but other places
          with less obvious abbreviations, such as BK for ‘Back Campus Fields’,
          take more effort to search on maps using their abbreviations. In these
          cases, students often need to search the building addresses on U of T
          website, which do not have direct links to Google Maps, and then copy
          the address over into Google Maps. This process, although trivial, is time
          consuming and unpleasant for most U of T students, especially when in a
          rush. Therefore, our group plans to build an application that has all of
          the building abbreviations embedded. Additionally, students have a hard
          time figuring out where to study when they are on campus, which also wastes
          valuable time. To resolve this, our app aims to conveniently locate all
          nearby libraries for the St. George campus, including ones that are often
          difficult to check for via the university website. Some additional features
          would include a distance filter so students can choose to view only the
          libraries within the distance they are willing to travel.
          </h3>
        </div>

      </div>
    );
  }
}

export default about;
