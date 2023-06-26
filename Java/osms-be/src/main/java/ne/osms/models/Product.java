package ne.osms.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ne.osms.utils.InitiatorAudit;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product extends InitiatorAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "code")
    private UUID code;
    @Column
    private String name;
    @Column(name = "product_type")
    private String productType;
    @Column
    private Double price;

    @Column(name= "in_date")
    private LocalDateTime inDate;

    @OneToOne
    private Quantity quantity;

    public int hashCode() {
        return getClass().hashCode();
    }
}