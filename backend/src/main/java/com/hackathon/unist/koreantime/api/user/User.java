package com.hackathon.unist.koreantime.api.user;

import com.hackathon.unist.koreantime.api.participation.Participation;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter @EqualsAndHashCode(of = "id")
public class User implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String principal;
    @Enumerated(EnumType.STRING)
    private SocialType socialType;
    private String lat;
    private String lng;
    private LocalDateTime registerDate;
    @OneToMany(mappedBy = "user")
    private List<Participation> participations;

    @PrePersist
    public void initRegisterDate(){
        this.registerDate = LocalDateTime.now();
    }
}
