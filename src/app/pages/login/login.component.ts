import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.verifyTokenUrlCallback()

  }


  verifyTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback();

    if(!!token)
      this.spotifyService.defineAccessToken(token);
  }


  openPageLogin() {
    window.location.href = this.spotifyService.getUrlLogin();
  }

}
