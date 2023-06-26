package ne.osms.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ne.osms.enums.Eoperation;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "quantities")
public class Quantity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @OneToOne
    private Product productCode;

    @Column
    private Double quantity;

    @Enumerated(EnumType.STRING)
    private Eoperation operation = Eoperation.IN;

    @Column
    private LocalDateTime date;

    public int hashCode() {
        return getClass().hashCode();
    }
}