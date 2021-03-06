import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image, Segment, Grid, List, Label, Divider } from 'semantic-ui-react';



class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src={"http://murphyshawaii.com/media/2014/04/murphyshawaii.png."}/>
            <Menu.Item fitted position="right">Home</Menu.Item>
            <Dropdown icon="dropdown Icon" item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here</Dropdown.Item>
                <Dropdown.Item>Catering/Private Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>St. Patrick's Day</Menu.Item>
            <Dropdown icon="dropdown Icon" item text="Menu">
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
                <Dropdown.Item>Dinner Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>Bar</Menu.Item>
            <Menu.Item><Icon name="search" /></Menu.Item>
          </Container>
        </Menu>
    )
  }
} // End of Top Menu Bar


class FullWidthImage extends React.Component {
  render() {
    return (
        <div className="murphys-background">


          <Grid container verticalAlign='middle' style={{height:'600px'}}columns={2} >

            <Grid.Row columns="two">
            <Grid.Column>
              <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png" />
            </Grid.Column>


            <Grid.Column>
              <Header as='h2' inverted>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the
                waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</Header>
            </Grid.Column>
            </Grid.Row>

          </Grid>


        </div>

    )
  }
} // End Main Image



class FooterMenu extends React.Component {

  render() {
    return (

        <div className='footer-background'>
          <Grid columns={3} centered relaxed='very'>

            <Grid.Column>
              <Menu.Item>Lunch</Menu.Item>
              <hr/>
              <List>
                <List.Item>Monday - Friday: 11:00am - 2:30pm</List.Item>
                <List.Item>Saturday & Sunday: Not open for lunch</List.Item>

              </List>
            </Grid.Column>

            <Grid.Column>
              <Menu.Item>Bar</Menu.Item>
              <hr/>
              <List>
                <List.Item>Monday - Friday: From 11:00am</List.Item>
                <List.Item>Saturday & Sunday: From 4:00pm</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <Menu.Item>Dinner</Menu.Item>
              <hr/>
              <List>
                <List.Item>Monday - Saturday: 5:30pm - 10:00pm.</List.Item>
                <List.Item>Sunday: 5:00pm - 9:00pm</List.Item>
              </List>
            </Grid.Column>

          </Grid>
        </div>
    )
  }
} // End Footer Menu



class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>

        </div>
    );
  }
}



ReactDOM.render(<Murphys/>, document.getElementById('root'));