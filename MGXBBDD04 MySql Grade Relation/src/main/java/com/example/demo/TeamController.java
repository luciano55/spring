package com.example.demo;

import java.util.List;

import javax.annotation.PostConstruct;

import com.example.demo.model.Player;
import com.example.demo.model.Team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

  @Autowired
  private TeamRepository teamRepository;

  @Autowired
  private PlayerRepository playerRepository;

  @PostConstruct
  public void init() {

    Player p1 = new Player("Torres", 10);
    Player p2 = new Player("Iniesta", 10);

    playerRepository.save(p1);
    playerRepository.save(p2);

    Team team = new Team("Selección", 1);

    team.getPlayers().add(p1);
    team.getPlayers().add(p2);

    teamRepository.save(team);
  }

  @RequestMapping("/teams/")
  public List<Team> getTeams() throws Exception {
    return teamRepository.findAll();
  }
}
