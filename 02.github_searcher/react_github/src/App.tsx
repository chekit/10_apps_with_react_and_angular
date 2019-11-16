import './App.css';

import React, { Component } from 'react';

import { Profile, ProfileProps, Repos, ReposProps, Search } from './components/';
import { ComponentState } from './models/components-props';
import { fetchReposData, fetchUserData } from './services/api.service';

interface AppState {
  profile: ProfileProps,
  repos: ReposProps,
}

enum Components {
  REPOS = 'repos',
  PROFILE = 'profile'
}

const DEFAULT_STATE: AppState = {
  profile: {
    state: ComponentState.LOADED
  },
  repos: {
    state: ComponentState.LOADED
  }
};

class App extends Component<any, AppState> {
  state: AppState = DEFAULT_STATE;

  constructor(props: any) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value: string): void {
    value = value.trim();

    if (!value) {
      this.changeState(Components.PROFILE, null, ComponentState.LOADED);
      this.changeState(Components.REPOS, null, ComponentState.LOADED);

      return;
    }


    this.changeState(Components.PROFILE, null, ComponentState.LOADING);
    this.changeState(Components.REPOS, null, ComponentState.LOADING);

    fetchUserData(value)
      .then((result) => this.changeState(Components.PROFILE, result, ComponentState.LOADED))
      .catch(() => this.changeState(Components.PROFILE, null, ComponentState.ERROR));

    fetchReposData(value)
      .then((result) => this.changeState(Components.REPOS, result, ComponentState.LOADED))
      .catch(() => this.changeState(Components.REPOS, null, ComponentState.ERROR));
  }

  
  render(): any {
    return (
      <div className="app">
        <Search cb={this.onSearch} />
        <div className="info">
          <Profile data={this.state.profile.data} state={this.state.profile.state} />
          <Repos data={this.state.repos.data} state={this.state.repos.state} />
        </div>
      </div>
    );
  }

  private changeState(key: string, data: any, state: ComponentState): void {
    this.setState((previousState: AppState) => ({
      ...previousState,
      [key]: {
        data,
        state
      }
    }))
  }
}

export default App;
