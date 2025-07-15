import { Injectable } from '@angular/core';
const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class AuthService {
  async register(user: any) {
    const response = await fetch(`${API}/user/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    if (!response.ok) throw new Error('Failed to register user');
    return response.json();
  }
  async login(user: any) {
    const response = await fetch(`${API}/user/login`, {
      method: `POST`,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    return response.json();
  }
}