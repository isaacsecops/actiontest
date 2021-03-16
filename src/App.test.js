import { render, screen, act } from '@testing-library/react';
import App from './App';
import About from './About';
import Home from './Home';
import External from './External';
import Footer from './Footer';

describe('App.test.js', () => {
  test('<App />', () => {    
    render(<App />);
    const heading = screen.queryAllByText(/Home/i);
    expect(heading[0]).toBeInTheDocument();
  });

  test('<Home />', async () => {
    render(<Home />);
    const heading = screen.queryAllByText(/Home/i);
    expect(heading[0]).toBeInTheDocument();
  });
  
  test('<About />', async () => {   
    render(<About />);
    const heading = screen.queryAllByText(/About/i);
    expect(heading[0]).toBeInTheDocument();
  });
  
  test('<External />', async () => { 
    render(<External />);
    const heading = screen.queryAllByText(/External Markdown Content/i);
    expect(heading[0]).toBeInTheDocument();
  });

  test('<Footer />', () => {
    render(<Footer />);
    const searchedContent = screen.queryAllByText(/Developed by/i);
    expect(searchedContent[0]).toBeInTheDocument();
  });
});
